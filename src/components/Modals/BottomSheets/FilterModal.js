import React, { useMemo, useState, useCallback } from 'react';
import { View, Text, Dimensions } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet';
import CheckBox from '@react-native-community/checkbox';
import styles from './BottomSheet.style';
import CommonButton from '../../Buttons/CommonButton';
import colors from '../../../constants/colors';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterModal = ({
    reference,
    isCompletedShown,
    setIsCompletedShown,
    isNotCompletedShown,
    setIsNotCompletedShown,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    multiAmountValue,
    setMultiAmountValue
}) => {
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    const [isDatePickerOpened, setIsDatePickerOpened] = useState(false)
    const [isDatefromPicking, setIsDatefromPicking] = useState(false)

    const openDateFromPicker = () => {
        setIsDatefromPicking(true)
        setIsDatePickerOpened(true)
    }

    const openDateToPicker = () => {
        setIsDatefromPicking(false)
        setIsDatePickerOpened(true)
    }

    const handleValueChange = useCallback((low, high) => {
        setMinAmount(low);
        setMaxAmount(high);
    }, []);

    const formatedDateFrom = moment(startDate).format('dddd, DD-MM-YYYY')
    const formatedDateTo = moment(endDate).format('dddd, DD-MM-YYYY')


    const renderThumb = useCallback(() => <RangeSlider.Thumb/>, []);
    const renderRail = useCallback(() => <RangeSlider.Rail/>, []);
    const renderRailSelected = useCallback(() => <RangeSlider.RailSelected/>, []);
    const renderLabel = useCallback(value => <RangeSlider.Label text={value}/>, []);
    const renderNotch = useCallback(() => <RangeSlider.Notch/>, []);

    return (
        <BottomSheet
            ref={reference}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={styles.filterBackground}
            handleIndicatorStyle={styles.handleStyle}
            enablePanDownToClose={true}
        >
            <View style={styles.filterContentWrapper}>
                <View style={styles.filterItemWrapper}>
                    <Text style={styles.filterTitle}>Items to show:</Text>
                    <View style={styles.checkBoxWrapper}>
                        <CheckBox
                            value={isCompletedShown}
                            onValueChange={setIsCompletedShown}
                            boxType="square"
                            onCheckColor={colors.whiteBlue}
                            onTintColor={colors.whiteBlue}
                        />
                        <Text style={styles.checkBoxLabel}>Completed</Text>
                    </View>
                    <View style={styles.checkBoxWrapper}>
                        <CheckBox
                            value={isNotCompletedShown}
                            onValueChange={setIsNotCompletedShown}
                            boxType="square"
                            onCheckColor={colors.whiteBlue}
                            onTintColor={colors.whiteBlue}
                        />
                        <Text style={styles.checkBoxLabel}>Pending</Text>
                    </View>
                </View>
                <View style={styles.filterItemWrapper}>
                    <Text style={styles.filterTitle}>Filter items by creation date</Text>
                    <View style={styles.datePickButtons}>
                        <View style={styles.datePickButtonWrapper}>
                            <CommonButton text="From" style={styles.commonButtonStyle} onPress={openDateFromPicker}/>
                            <Text style={styles.date}>{formatedDateFrom}</Text>
                        </View>
                        <View style={styles.datePickButtonWrapper}>
                            <CommonButton text="To" style={styles.commonButtonStyle} onPress={openDateToPicker}/>
                            <Text style={styles.date}>{formatedDateTo}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.filterItemWrapper]}>
                    <Text style={styles.filterTitle}>Filter items by amount</Text>
                    <View style={styles.sliderWrapper}>
                        <MultiSlider
                            values={[multiAmountValue[0], multiAmountValue[1]]}
                            isMarkersSeparated={true}
                            sliderLength={Dimensions.get('window').width * 0.7}
                            onValuesChangeFinish={setMultiAmountValue}
                            max={5000}
                            min={0}
                        />
                    </View>
                    <View style={styles.valuesWrapper}>
                        <Text style={styles.date}>{multiAmountValue[0]}</Text>
                        <Text style={styles.date}>{multiAmountValue[1]}</Text>
                    </View>
                </View>
            </View>
            <DatePicker
                mode={'date'}
                modal
                open={isDatePickerOpened}
                date={isDatefromPicking ? startDate : endDate}
                onConfirm={(date) => {
                    setIsDatePickerOpened(false)
                    if(isDatefromPicking)
                        setStartDate(date)
                    else
                        setEndDate(date)
                }}
                onCancel={() => {
                    setIsDatePickerOpened(false)
                }}
            />
        </BottomSheet>
    )
}

export default FilterModal