import React, { useState } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './Categories.style'
import colors from '../../../constants/colors'
import Tab from '../../Tab'
import Plus from '../../Icons/Plus'
import screenNames from '../../../constants/screenNames'
import iconMap from '../../../utils/iconMap'
import BackArrow from '../../Icons/BackArrow'

const renderCategoriesList = ({ index, item }, activeCategoryId, setActiveCategoryId, navigation, onCategorySelect) => {
    const Icon = iconMap[item.iconName]

    const processedCategoryTitle = item?.name?.length > 10 ? `${item?.name.slice(0, 9)}...` : item?.name
    
    return (
        <>
            {
                index ? (
                    <TouchableOpacity
                        onLongPress={
                            () => navigation.navigate(screenNames.CategoryCreate, {
                                categoryInfo: item
                            })
                        }
                        style={activeCategoryId === index ?  [styles.category, {backgroundColor: item.color}] : styles.category}
                        onPress={() => {
                            setActiveCategoryId(index)
                            onCategorySelect(item?.id)
                        }}
                    >
                        <View style={[styles.iconWrapper, {backgroundColor: item.color}]}>
                            <Icon width={35} fill={colors.white}/>
                        </View>
                        <Text style={styles.categoryTitle}
                        >{processedCategoryTitle}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.category}
                        onPress={() => navigation.navigate(screenNames.CategoryCreate)}
                    >
                        <View style={[styles.iconWrapper, {backgroundColor: 'transparent', sopacity: 0.5, borderWidth: 0}]}>
                            <Plus width={50} fill={colors.subText}/>
                        </View>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

const Categories = ({ navigation, route }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(0)

    const categoryList = useSelector(store => store.categories.categories)
    const modifiedCategoryList = [0, ...categoryList]

    const isCategorySelectionMode = route?.params?.isCategorySelectionMode
    const onCategorySelect = isCategorySelectionMode ? route?.params?.onCategorySelect : () => {}

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Categories"
                HeaderIconLeft={
                    isCategorySelectionMode ? 
                    () => <BackArrow width={20} fill={colors.white} onPress={navigation.goBack} /> : 
                    null
                }
            >
                <FlatList
                    style={styles.categoriesList}
                    data={modifiedCategoryList}
                    renderItem={(item) => renderCategoriesList(item, activeCategoryId, setActiveCategoryId, navigation, onCategorySelect)}
                    numColumns={3}
                    columnWrapperStyle={styles.listColumnWrapper}
                    contentContainerStyle={styles.listContentContainer}
                />
            </Tab>
        </View>
    )
}

export default Categories