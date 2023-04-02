import React, { useState, useEffect, useId } from 'react'
import { View, Text } from 'react-native'
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
import SpendingsList from '../../SpendingsList'
import PrimaryButton from '../../Buttons/PrimaryButton'

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
    const chosenSpendings = spendings.filter(spending => spendingsId.includes(spending.id))

    const isButtonDisbled = template.isAplied

    const templateCreate = () => {
        dispatch(applyTemplate({
            id: template.id
        }))
    }

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle={templateName}
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
                isScrollable
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
                <View style={styles.spendingsWrapper}>
                    <SpendingsList
                        navigation={navigation}
                        spendings={chosenSpendings}
                        categories={categories}
                        isPlannedSpendingsShown={true}
                        searchedSpendingName=""
                        isTemplateViewer
                    />
                </View>
                <PrimaryButton text="Apply template" disabled={isButtonDisbled} onPress={templateCreate}/>
            </Tab>
        </View>
    )
}

export default TemplateViewer