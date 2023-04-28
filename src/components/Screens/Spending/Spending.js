import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Tab from '../../Tab'
import styles from './Spending.style'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import PrimaryButton from '../../Buttons/PrimaryButton'
import Money from '../../Icons/Money'
import Categories from '../../Icons/Categories'
import Tag from '../../Icons/Tag';
import { completeSpending } from '../../../reduxManager/spendingsSlice';

const Spending = ({ navigation, route }) => {

    const userInfo = useSelector(store => store.userSlice.user)

    const dispatch = useDispatch()

    const spendingiD = route.params.spendingId

    const spending = useSelector(store => store.spendings.spendings).find(spending => spending.id === spendingiD)

    const spandingStatus = spending.isCompleted ? 'Completed' : 'Waiting to complete'

    const onSubmit = () => {
        dispatch(completeSpending({
            spendingId: spendingiD,
        }))
        navigation.goBack()
    }

    return (
        
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Spending info"
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
                isScrollable
            >
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Spending name</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Tag fill={colors.white} width={20}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{spending.name}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Spending amount</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Money fill={colors.textPrimary} width={18}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{userInfo?.currency}{spending.amount}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Comment</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Categories fill={colors.textPrimary} width={18}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{spending.comment}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.partWrapper}>
                    <Text style={styles.partTitle}>Status</Text>
                    <View style={styles.partValueWrapper}>
                        <View style={styles.iconWrapper}>
                            <Categories fill={colors.textPrimary} width={18}/>
                        </View>
                        <View style={styles.wrapperLikeInput}>
                            <Text style={styles.partValue}>{spandingStatus}</Text>
                        </View>
                    </View>
                </View>
                <PrimaryButton
                    text={"Complete spending"}
                    onPress={onSubmit}
                    disabled={spending.isCompleted}
                /> 
            </Tab>
        </View>
    )
}

export default Spending