import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity, Text, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid';

import styles from './CategoryCreate.style'
import Tab from '../../Tab'
import BackArrow from '../../Icons/BackArrow'
import colors from '../../../constants/colors'
import screenNames from '../../../constants/screenNames'
import Tag from '../../Icons/Tag'
import PrimaryButton from '../../Buttons/PrimaryButton'
import CommonButton from '../../Buttons/CommonButton/CommonButton';
import iconMap from '../../../utils/iconMap'
import { editCategory, createCategory } from '../../../reduxManager/categorySlice'

const renderIcon = ({item, index}, chosenIconName, setChosenIconName, categoryColor) => {
    const Icon = iconMap[item]
    return (
        <TouchableOpacity
            style={chosenIconName === item ? [styles.newIconWrapper, {backgroundColor: categoryColor || colors.subText}] : styles.newIconWrapper}
            onPress={() => setChosenIconName(item)}
        >
            <Icon width={35} fill={colors.white}/>
        </TouchableOpacity>
    )
}

const CategoryCreate = ({ navigation, route }) => {

    const [categoryTitle, setCategoryTitle] = useState('')
    const [categoryColor, setCategoryColor] = useState('')
    const [chosenIconName, setChosenIconName] = useState('')
    const dispatch = useDispatch()

    const categoryInfo = route?.params?.categoryInfo
    const categoryList = useSelector(store => store.categories.categories)
    const userInfo = useSelector(store => store.userSlice.user)
    const categoryLastId = categoryList?.[categoryList.length - 1]?.id || 0

    useEffect(() => {
        setCategoryTitle(categoryInfo?.name)
        setCategoryColor(categoryInfo?.color)
        setChosenIconName(categoryInfo?.iconName)
    }, [categoryInfo])

    const isCreateButtonDisabled = !categoryTitle?.length || !categoryColor?.length || !chosenIconName?.length

    const navigateToColorPicker = () => {
        navigation.navigate(screenNames.ColorPicker, {
            categoryColor,
            setCategoryColor
        })
    }

    const createNewCategory = () => {
        dispatch(createCategory({
            id: uuid(),
            name: categoryTitle,
            color: categoryColor,
            iconName: chosenIconName,
            user_id: userInfo.id
        }))
        navigation.goBack()
    }

    const editExistingCategory = () => {
        dispatch(editCategory({
            ...categoryInfo,
            name: categoryTitle,
            color: categoryColor,
            iconName: chosenIconName,
            user_id: userInfo.id
        }))
        navigation.goBack()
    }

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle={categoryInfo ? "Edit the category" : "Create a new category"}
                style={{flex: 1}}
                HeaderIconLeft={() => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} />}
            >
                <View style={styles.titleInputWrapper}>
                    <View style={styles.iconWrapper}>
                        <Tag fill={colors.white} width={20}/>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCategoryTitle}
                        value={categoryTitle}
                        placeholder="Category name"
                        placeholderTextColor={colors.subText}
                    />
                </View>
                <View style={styles.iconChooseWrapper}>
                    <Text style={styles.iconChooseTitle}>Choose an icon for your category</Text>
                    <FlatList
                        style={styles.iconsList}
                        data={Object.keys(iconMap)}
                        renderItem={(item) => renderIcon(item, chosenIconName, setChosenIconName, categoryColor)}
                        numColumns={3}
                        columnWrapperStyle={styles.listColumnWrapper}
                        contentContainerStyle={styles.listContentContainer}
                    />
                </View>
                <View style={styles.colorChooseWrapper}>
                    <CommonButton
                        text="Choose a color for your icon"
                        onPress={navigateToColorPicker}
                        style={styles.categoryPicker}
                        textStyle={styles.categoryPickerText}
                        isIconShown={true}
                        isCompleted={categoryColor?.length}
                    />
                </View>
                <View style={styles.createButtonWrapper}>
                    <PrimaryButton
                        text={categoryInfo ? "Edit category" : "Create category"}
                        onPress={categoryInfo ? editExistingCategory : createNewCategory}
                        disabled={isCreateButtonDisabled}
                    />
                </View>
            </Tab>
        </View>
    )
}

export default CategoryCreate