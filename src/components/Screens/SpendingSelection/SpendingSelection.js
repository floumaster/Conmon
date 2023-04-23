import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './SpendingSelection.style'

import colors from '../../../constants/colors'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import { useSelector } from 'react-redux'
import Done from '../../Icons/Done'
import Clock from '../../Icons/Clock'
import iconMap from '../../../utils/iconMap/iconMap'
import Plus from '../../Icons/Plus'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import screenNames from '../../../constants/screenNames'

const SpendingSelection = ({ navigation, route }) => {

    const spendings = useSelector(store => store.spendings.spendings)
    const categories = useSelector(store => store.categories.categories)
    const { spendingsId, setSpendingsId } = route.params
    
    const [selectedIds, setSelectedIds] = useState(spendingsId)

    const userInfo = useSelector(store => store.userSlice.user)
    const processedSpendings = []
    let bufArr = []
    spendings.forEach(spending => {
        bufArr.push(spending)
        if(bufArr.length === 2){
            processedSpendings.push(bufArr)
            bufArr = []
        }
    });

    const toggleSpendingSelection = (id) => {
        if(selectedIds.includes(id))
            setSelectedIds([...selectedIds.filter(_id => _id !== id)])
        else
            setSelectedIds([...selectedIds, id])
    }

    const handleGoBack = () => {
        setSpendingsId(selectedIds)
        navigation.goBack()
    }

    const handleSpendingCreateNavigation = () => {
        navigation.navigate(screenNames.SpendingCreate)
    }

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Choose spendings"
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={handleGoBack} />}
            >
                <ScrollView style={styles.spendingsWrapper}>
                    {
                        processedSpendings.map(spendingPair => {
                            
                            return (
                                <View style={styles.spendingsRowWrapper}>
                                    {
                                        spendingPair.map(spending => {
                                            const additionalMarkerWrapperStyle = (selectedIds.includes(spending.id) ? styles.done : styles.notDone)
                                            const Statusicon = selectedIds.includes(spending.id) ? Done : Plus
                                            const comment = spending.comment || ''
                                            const processedComment = comment.length > 20 ? `${comment.slice(0, 15)}...` : comment
                                            const Icon = iconMap[categories.find(cat => cat.id === spending.categoryId)?.iconName]
                                            const status = spending.isCompleted ? 'Completed' : 'Waiting to complete'
                                            return (
                                                <TouchableOpacity style={styles.spendingWrapper} onPress={() => toggleSpendingSelection(spending.id)}>
                                                    <View style={styles.spendingTitleWrapper}>
                                                        <Text style={styles.spendingTitle}>{spending.name}</Text>
                                                        <View style={[styles.markerWrapper, additionalMarkerWrapperStyle]}>
                                                            <Statusicon width={18} fill={colors.white} />
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
            </Tab>
        </View>
    )
}

export default SpendingSelection