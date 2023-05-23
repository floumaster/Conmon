import React, { useState, useEffect, useId } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';

import { applyTemplate } from '../../../reduxManager/templateSlice'
import Input from '../../Input'
import styles from './TemplateViewer.style'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import Tag from '../../Icons/Tag'
import Categories from '../../Icons/Categories'
import iconMap from '../../../utils/iconMap/iconMap';
import PrimaryButton from '../../Buttons/PrimaryButton'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Clock from '../../Icons/Clock';
import screenNames from '../../../constants/screenNames';
import moment from 'moment';
import { createSpending } from '../../../reduxManager/spendingsSlice';


const TemplateViewer = ({ navigation, route }) => {
    const { templateId } = route.params

    const template = useSelector(store => store.templates.templates).find(template => template.id === templateId)
    const templateName = template.name
    const templateDescription = template.description
    const spendingsId = template.spendingsId
    const templateStatus = template.isAplied ? 'Applied' : 'Not applied'

    const dispatch = useDispatch()

    const categories = useSelector(store => store.categories.categories)
    const spendings = useSelector(store => store.spendings.spendings)
    const userInfo = useSelector(store => store.userSlice.user)
    const chosenSpendings = spendings.filter(spending => spendingsId.includes(spending.id))
    const processedSpendings = []
    let bufArr = []
    chosenSpendings.forEach(spending => {
        bufArr.push(spending)
        if(bufArr.length === 2){
            processedSpendings.push(bufArr)
            bufArr = []
        }
    });
    if(bufArr.length === 1){
        processedSpendings.push(bufArr)
        bufArr = []
    }
    const isButtonDisbled = template.isAplied

    const templateCreate = () => {
        chosenSpendings.forEach(spending => {
            dispatch(createSpending(
                {
                    ...spending,
                    completionDate: null,
                    creationDate: moment().toDate(),
                    id: uuid(),
                    isCompleted: false,
                    isScheduled: true,
                }
            ))
        })
        dispatch(applyTemplate({
            id: template.id
        }))
    }

    const handleNavigateToSpendingInfo = (id) => {
        navigation.navigate(screenNames.Spending, {
            spendingId: id,
        })
    }

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle={templateName}
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
            >
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Template name</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Tag fill={colors.textPrimary} width={18}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{templateName}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Template description</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Categories fill={colors.textPrimary} width={18}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{templateDescription}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Template status</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Categories fill={colors.textPrimary} width={18}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{templateStatus}</Text>
                        </View>
                    </View>
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
                                            return (
                                                <TouchableOpacity style={styles.spendingWrapper} onPress={() => handleNavigateToSpendingInfo(spending.id)}>
                                                    <View style={styles.spendingTitleWrapper}>
                                                        <Text style={styles.spendingTitle}>{spending.name}</Text>
                                                        <View style={[styles.markerWrapper, styles.notDone]}>
                                                            <Clock width={18} fill={colors.white} />
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
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <PrimaryButton text="Apply template" disabled={isButtonDisbled} onPress={templateCreate}/>
            </Tab>
        </View>
    )
}

export default TemplateViewer