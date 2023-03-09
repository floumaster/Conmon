import React, { useState } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './Categories.style'
import colors from 'constants/colors'
import Tab from 'components/Tab'
import Plus from 'components/Icons/Plus'
import screenNames from 'constants/screenNames'
import iconMap from '../../../utils/iconMap'

const renderCategoriesList = ({ index, item }, activeCategoryId, setActiveCategoryId, navigation) => {
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
                        onPress={() => setActiveCategoryId(index)}
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

const Categories = ({ navigation }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(0)
    const categoryList = useSelector(store => store.categories.categories)
    const modifiedCategoryList = [0, ...categoryList]
    return (
        <View style={styles.wrapper}>
            <Tab headerTitle="Categories">
                <FlatList
                    style={styles.categoriesList}
                    data={modifiedCategoryList}
                    renderItem={(item) => renderCategoriesList(item, activeCategoryId, setActiveCategoryId, navigation)}
                    numColumns={3}
                    columnWrapperStyle={styles.listColumnWrapper}
                    contentContainerStyle={styles.listContentContainer}
                />
            </Tab>
        </View>
    )
}

export default Categories