import React from 'react'
import { View } from 'react-native'
import styles from './SpendingSelection.style'

import colors from '../../../constants/colors'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import SpendingsList from '../../SpendingsList'
import { useSelector } from 'react-redux'

const SpendingSelection = ({ navigation, route }) => {

    const spendings = useSelector(store => store.spendings.spendings)
    const categories = useSelector(store => store.categories.categories)
    const { spendingsId, setSpendingsId } = route.params

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Choose spendings"
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
            >
                <SpendingsList
                    navigation={navigation}
                    spendings={spendings}
                    categories={categories}
                    isPlannedSpendingsShown={true}
                    searchedSpendingName=""
                    isSpendingSelection
                    spendingsId={spendingsId}
                    setSpendingsId={setSpendingsId}
                />
            </Tab>
        </View>
    )
}

export default SpendingSelection