import React, { useMemo } from 'react';
import { View, Text } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet';
import DropDown from '../../DropDown';
import styles from './BottomSheet.style';
import sortingTypes from '../../../constants/sortingTypes';

const SortingModal = ({reference, setSortingType}) => {
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

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
                <Text style={styles.filterTitle}>Sort by:</Text>
                <DropDown value={sortingTypes} setValue={setSortingType}/>
            </View>
        </BottomSheet>
    )
}

export default SortingModal