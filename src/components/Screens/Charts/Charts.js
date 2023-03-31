import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts"
import DatePicker from 'react-native-date-picker';

import styles from './Charts.style'
import Tab from '../../Tab'
import { useSelector } from 'react-redux'
import { timePeriods } from '../../../constants/timePeriods'
import moment from 'moment'
import colors from '../../../constants/colors'

const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

const Charts = () => {

    const [periodId, setPeriodId] = useState(0)
    const [isDatePickerOpened, setIsDatePickerOpened] = useState(false)
    const [isDateFromPicking, setIsDateFromPicking] = useState(false)
    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())

    const spendings = [...useSelector(store => store.spendings.spendings)]
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
        console.log("kek", from, moment(spending.completionDate), to)
        return from <= moment(spending.completionDate) && moment(spending.completionDate) <= to
    })
    const formatedSpendings = [...spendingsFilteredByDate]  .map(spending => (
        {
            ...spending,
            value: spending.amount,
        }
    ))

    const handlePeriodPress = (id) => {
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
                    <BarChart data={formatedSpendings} color={colors.white}/>
                    <LineChart data={formatedSpendings}
                        dataPointsColor={colors.textPrimary}
                        dataPointsRadius={4}
                        thickness={3}
                    />
                    <PieChart data={formatedSpendings} />
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