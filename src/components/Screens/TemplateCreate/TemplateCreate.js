import React, { useState, useEffect, useId } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';

import { addTemplate } from '../../../reduxManager/templateSlice'
import Input from '../../Input'
import styles from './TemplateCreate.style'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import Tag from '../../Icons/Tag'
import Categories from '../../Icons/Categories'
import SpendingsList from '../../SpendingsList'
import PrimaryButton from '../../Buttons/PrimaryButton'

const TemplateCreate = ({ navigation }) => {

    const [templateName, setTemplateName] = useState('')
    const [templateDescription, setTemplateDescription] = useState('')
    const [spendingsId, setSpendingsId] = useState([])

    const dispatch = useDispatch()

    const categories = useSelector(store => store.categories.categories)
    const spendings = useSelector(store => store.spendings.spendings)
    const chosenSpendings = spendings.filter(spending => spendingsId.includes(spending.id))

    const isButtonDisbled = templateName.length === 0 || spendingsId.length === 0

    const templateCreate = () => {
        dispatch(addTemplate({
            id: uuid(),
            name: templateName,
            description: templateDescription,
            isAplied: false,
            spendingsId: spendingsId
        }))
        navigation.goBack()
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
                <View style={styles.spendingsWrapper}>
                    <SpendingsList
                        navigation={navigation}
                        spendings={chosenSpendings}
                        categories={categories}
                        isPlannedSpendingsShown={true}
                        searchedSpendingName=""
                        isInTemplateList
                        spendingsId={spendingsId}
                        setSpendingsId={setSpendingsId}
                    />
                </View>
                <PrimaryButton text="Create template" disabled={isButtonDisbled} onPress={templateCreate}/>
            </Tab>
        </View>
    )
}

export default TemplateCreate