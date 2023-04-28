import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts"
import DatePicker from 'react-native-date-picker';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import styles from './Charts.style'
import Tab from '../../Tab'
import { useSelector } from 'react-redux'
import { timePeriods } from '../../../constants/timePeriods'
import moment from 'moment'
import colors from '../../../constants/colors'
import Done from '../../Icons/Done'
import Clock from '../../Icons/Clock'
import iconMap from '../../../utils/iconMap';
import screenNames from '../../../constants/screenNames';

const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
const barChartLength = Dimensions.get('window').width * 0.8

const SpengingItem = ({ item, categories, navigation }) => {

    const userInfo = useSelector(store => store.userSlice.user)

    const navigateToSpendingInfo = (spendingId) => {
        navigation.navigate(screenNames.Spending, {
            spendingId
        })
    }

    const comment = item.comment || ''

    const processedComment = comment.length > 20 ? `${comment.slice(0, 40)}...` : comment

    const status = item.isCompleted ? 'Completed' : 'Waiting to complete'

    const Icon = iconMap[categories.find(cat => cat.id === item.categoryId)?.iconName]

    const additionalMarkerWrapperStyle = item.isCompleted ? styles.done : styles.notDone

    const Statusicon = item.isCompleted ? Done : Clock

    return (
        <TouchableOpacity style={styles.spendingWrapper} onPress={() => navigateToSpendingInfo(item.id)}>
            <View style={styles.spendingTitleWrapper}>
                <Text style={styles.spendingTitle}>{item.name}</Text>
                <View style={[styles.markerWrapper, additionalMarkerWrapperStyle]}>
                    <Statusicon width={18} fill={colors.white}/>
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
                    <Text style={styles.spendingStatsValue}>{userInfo?.currency}{item.amount}</Text>
                    <Text style={styles.spendingStatsText}>{status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const CustomLabel = (item, categories) => {
    const Icon = iconMap[categories.find(cat => cat.id === item.categoryId)?.iconName]

    return (
        <View style={{left: -5}}>
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
        </View>
    );
};

const Charts = ({ navigation }) => {

    const [periodId, setPeriodId] = useState(0)
    const [isDatePickerOpened, setIsDatePickerOpened] = useState(false)
    const [isDateFromPicking, setIsDateFromPicking] = useState(false)
    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())

    const [selectedSpendingBar, setSelectedSpendingBar] = useState(null)
    const [selectedSpendingLine, setSelectedSpendingLine] = useState(null)
    const [selectedSpendingDonut, setSelectedSpendingDonut] = useState(null)

    const spendings = [...useSelector(store => store.spendings.spendings)]
    const categories = [...useSelector(store => store.categories.categories)]

    const spendingsFilteredByDate = [...spendings].filter(spending => {
        let from = moment(),
        to = moment()
        switch(periodId){
            case 0:
                from = moment()
                to = moment()
                break;
            case 1:
                from = moment().subtract(7,'d')
                to = moment()
                break;
            case 2:
                from = moment().subtract(1,'months')
                to = moment()
                break;
            case 3:
                from = moment().subtract(1,'year')
                to = moment()
                break;
            case 4:
                from = moment(dateFrom)
                to = moment(dateTo)
                break;
            default:
                break;
        }
        return from <= moment(spending.completionDate) && moment(spending.completionDate) <= to
    })

    const formatedSpendings = [...spendingsFilteredByDate].map(spending => (
        {
            ...spending,
            value: parseInt(spending.amount),
            color: categories.find(category => category.id === spending.categoryId).color,
            topLabelComponent: () => CustomLabel(spending, categories),
            text: spending.name,
            shiftTextX: -20
        }
    ))

    const handlePeriodPress = (id) => {
        setSelectedSpendingDonut(null)
        setSelectedSpendingBar(null)
        setSelectedSpendingLine(null)
        setPeriodId(id)
        if(id === 4)
            onPeriodPress()
    }

    const formatPeriodText = () => {
        let from, to
        switch(periodId){
            case 0:
                return moment().format('dddd')
            case 1:
                from = `${moment().subtract(7,'d').format('dddd, DD MMMM')}`
                to = `${moment().format('dddd, DD MMMM')}`
                return `${from} - ${to}`
            case 2:
                from = `${moment().subtract(1,'months').format('dddd, DD MMMM')}`
                to = `${moment().format('dddd, DD MMMM')}`
                return `${from} - ${to}`
            case 3:
                from = `${moment().subtract(1,'year').format('dddd, DD MMMM YYYY')}`
                to = `${moment().format('dddd, DD MMMM YYYY')}`
                return `${from} - ${to}`
            case 4:
                from = `${moment(dateFrom).format('dddd, DD MMMM YYYY')}`
                to = `${moment(dateTo).format('dddd, DD MMMM YYYY')}`
                return `${from} - ${to}` 
            default:
                return ''
        }
    }

    const onSpendingBarSelect = (item, index) => {
        setSelectedSpendingBar(item)
    }

    const onSpendingLineSelect = (item, index) => {
        setSelectedSpendingLine(item)
    }

    const onSpendingDonutSelect = (item, index) => {
        setSelectedSpendingDonut(item)
    }

    useEffect(() => {
        if(periodId === 4)
            setIsDatePickerOpened(true)
    }, [dateFrom])

    const formatedPeriod = formatPeriodText()

    const onPeriodPress = () => {
        setIsDatePickerOpened(true)
    }

    return (
        <View style={styles.wrapper}>
            <Tab isScrollable style={{flex: 1}} headerTitle="Charts">
                <View style={styles.descriptionWrapper}>
                    <View style={styles.periodsWrapper}>
                        {
                            timePeriods.map(period => {
                                const textStyle = periodId === period.id ? styles.periodTitle : styles.periodTitleDisabled
                                const wrapperStyle = periodId === period.id ? styles.periodWrapper : styles.periodWrapperDisabled

                                return (
                                    <TouchableOpacity style={wrapperStyle} onPress={() => handlePeriodPress(period.id)}>
                                        <Text style={textStyle}>{period.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={styles.currentPeriodWrapper}>
                        <Text style={styles.currentPeriodText}>{formatedPeriod}</Text>
                    </View>
                </View>
                <View style={styles.chartWrapper}>
                    <View style={styles.barChartWrapper}>
                        <BarChart
                            data={formatedSpendings}
                            color={colors.white}
                            width={barChartLength}
                            onPress={onSpendingBarSelect}
                            spacing={40}
                            initialSpacing={20}
                            xAxisColor={colors.subText}
                            yAxisColor={colors.subText}
                            yAxisThickness={2}
                            xAxisThickness={2}
                            yAxisTextStyle={styles.AxisTextStyle}
                            frontColor={colors.whiteBlue}
                            sideColor={colors.whiteBlue}
                            topColor={colors.whiteBlue2}
                            isThreeD={true}
                            showGradient={true}
                            gradientColor={colors.whiteBlue2}
                            activeOpacity={0.5}
                            isAnimated={true}
                            animationDuration={300}
                        />
                        {
                            selectedSpendingBar &&
                            <SpengingItem
                                categories={categories}
                                item={selectedSpendingBar}
                                navigation={navigation}
                            />
                        }
                        <LineChart
                            data={formatedSpendings}
                            xAxisColor={colors.subText}
                            yAxisColor={colors.subText}
                            yAxisThickness={2}
                            xAxisThickness={2}
                            spacing={40}
                            initialSpacing={20}
                            width={barChartLength}
                            isAnimated={true}
                            yAxisTextStyle={styles.AxisTextStyle}
                            color={colors.textPrimary}
                            thickness={2}
                            dataPointsColor={colors.whiteBlue}
                            pressEnabled={true}
                            areaChart={true}
                            startFillColor={colors.whiteBlue}
                            endFillColor={colors.whiteBlue2}
                            startOpacity={0.8}
                            endOpacity={0.01}
                            onPress={onSpendingLineSelect}
                            dataPointsRadius={4}
                            focusedDataPointRadius={10}
                        />
                        {
                            selectedSpendingLine &&
                            <SpengingItem
                                categories={categories}
                                item={selectedSpendingLine}
                                navigation={navigation}
                            />
                        }
                        {/* <View style={{left: 20}}>
                            <PieChart
                                data={formatedSpendings}
                                innerRadius={70}
                                innerCircleColor={colors.primary}
                                onPress={onSpendingDonutSelect}
                                showText
                                textColor={colors.background}
                                textSize={13}
                                focusOnPress
                                strokeWidth={5}
                                strokeColor="#333"
                                innerCircleBorderWidth={10}
                                innerCircleBorderColor="#333"
                                showGradient
                                labelsPosition='outward'
                            />
                        </View> */}
                        {
                            selectedSpendingDonut &&
                            <SpengingItem
                                categories={categories}
                                item={selectedSpendingDonut}
                                navigation={navigation}
                            />
                        }
                    </View>
                </View>
            </Tab>
            <DatePicker
                title={isDateFromPicking ? 'Select start date' : 'Select final date'}
                mode={'date'}
                modal
                minimumDate={isDateFromPicking ? null : dateFrom}
                open={isDatePickerOpened}
                date={isDateFromPicking ? dateFrom : dateTo}
                onConfirm={(date) => {
                    setIsDatePickerOpened(false)
                    if(isDateFromPicking){
                        setDateFrom(date)
                        setIsDateFromPicking(false)
                    }
                    else{
                        setDateTo(date)
                        setIsDateFromPicking(true)
                    }
                }}
                onCancel={() => {
                    setIsDatePickerOpened(false)
                }}
            />
        </View>
    )
}

export default Charts