import React, { useState, useEffect, useId } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';

import { createTemplate } from '../../../reduxManager/templateSlice'
import Input from '../../Input'
import styles from './TemplateCreate.style'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import Tag from '../../Icons/Tag'
import Categories from '../../Icons/Categories'
import PrimaryButton from '../../Buttons/PrimaryButton'
import Plus from '../../Icons/Plus';
import Done from '../../Icons/Done';
import Clock from '../../Icons/Clock';
import iconMap from '../../../utils/iconMap/iconMap';
import screenNames from '../../../constants/screenNames';
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Minus from '../../Icons/Minus';

const TemplateCreate = ({ navigation }) => {

    const [templateName, setTemplateName] = useState('')
    const [templateDescription, setTemplateDescription] = useState('')
    const [spendingsId, setSpendingsId] = useState([])
    const userInfo = useSelector(store => store.userSlice.user)

    const dispatch = useDispatch()

    const categories = useSelector(store => store.categories.categories)
    const spendings = useSelector(store => store.spendings.spendings)
    const chosenSpendings = spendings.filter(spending => spendingsId.includes(spending.id))
    const processedSpendings = []
    let bufArr = [0]
    chosenSpendings.forEach(spending => {
        bufArr.push(spending)
        if(bufArr.length === 2){
            processedSpendings.push(bufArr)
            bufArr = []
        }
    });
    if(bufArr.length){
        processedSpendings.push(bufArr)
        bufArr = []
    }

    const isButtonDisbled = templateName.length === 0 || spendingsId.length === 0

    const templateCreate = () => {
        dispatch(createTemplate({
            templateInfo: {
                id: uuid(),
                name: templateName,
                description: templateDescription,
                isApplied: false,
                user_id: userInfo.id
            },
            spendingIds: spendingsId
        }))
        navigation.goBack()
    }

    const navigateToSpendingsSelecting = () => {
        navigation.navigate(screenNames.SpendingSelection, {
            spendingsId, setSpendingsId
        })
    }

    const toggleSpendingSelection = (id) => {
        if(spendingsId.includes(id))
            setSpendingsId([...spendingsId.filter(_id => _id !== id)])
        else
            setSpendingsId([...spendingsId, id])
    }

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Create template"
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
            >
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Set template name</Text>
                    <Input value={templateName} setValue={setTemplateName} placeholder="Template name"
                        Icon={() => <Tag fill={colors.white} width={20}/>}
                    />
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Set template description</Text>
                    <Input
                        value={templateDescription}
                        setValue={setTemplateDescription}
                        placeholder="Template description"
                        Icon={() => <Categories fill={colors.textPrimary} width={18}/>}
                    />
                </View>
                <ScrollView style={styles.spendingsWrapper}>
                    {
                        processedSpendings.map(spendingPair => {
                            
                            return (
                                <View style={styles.spendingsRowWrapper}>
                                    {
                                        spendingPair.map(spending => {
                                            const comment = spending.comment || ''
                                            const processedComment = comment.length > 20 ? `${comment.slice(0, 15)}...` : comment
                                            const Icon = iconMap[categories.find(cat => cat.id === spending.categoryId)?.iconName]
                                            const status = spending.isCompleted ? 'Completed' : 'Waiting to complete'

                                            if(spending === 0){
                                                return (
                                                    <TouchableOpacity
                                                        style={styles.spendingWrapperNew}
                                                        onPress={navigateToSpendingsSelecting}
                                                    >
                                                        <Text style={styles.spendingTitle}>Add new spending</Text>
                                                        <View style={styles.newSpendingButtonWrapper}>
                                                            <Plus fill={colors.white}/>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            }
                                            else{
                                                return (
                                                    <TouchableOpacity style={styles.spendingWrapper} onPress={() => toggleSpendingSelection(spending.id)}>
                                                        <View style={styles.spendingTitleWrapper}>
                                                            <Text style={styles.spendingTitle}>{spending.name}</Text>
                                                            <View style={[styles.markerWrapper]}>
                                                                <Minus width={18} fill={colors.white} />
                                                            </View>
                                                        </View>
                                                        <Text style={styles.spendingDescription}>{processedComment}</Text>
                                                        <View style={styles.spendingStatsWrapper}>
                                                            <AnimatedCircularProgress
                                                                size={50}
                                                                width={3}
                                                                fill={100}
                                                                prefill={50}
                                                                tintColor={colors.whiteBlue}
                                                                backgroundColor="#3d5875"
                                                            >
                                                                {
                                                                    () => <Icon width={26} height={26} fill={colors.white}/>
                                                                }
                                                            </AnimatedCircularProgress>
                                                            <View style={styles.spendingStatsTextWrapper}>
                                                                <Text style={styles.spendingStatsValue}>{userInfo?.currency}{spending.amount}</Text>
                                                                <Text style={styles.spendingStatsText}>{status}</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            }
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <PrimaryButton text="Create template" disabled={isButtonDisbled} onPress={templateCreate}/>
            </Tab>
        </View>
    )
}

export default TemplateCreate