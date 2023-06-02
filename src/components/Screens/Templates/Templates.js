import React, { useEffect } from 'react'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import styles from './Templates.style'
import Tab from '../../Tab'
import Plus from '../../Icons/Plus'
import { useSelector } from 'react-redux'

import colors from '../../../constants/colors'
import screenNames from '../../../constants/screenNames'

const renderTemplatesList = (item, index, navigation) => {

    const status = item.isAplied ? 'Aplied' : 'Not aplied'

    const navigateToTemplateCreate = () => {
        navigation.navigate(screenNames.TemplateCreate)
    }

    const navigateToTemplateViewer = () => {
        navigation.navigate(screenNames.TemplateViewer, {
            templateId: item.id
        })
    }

    const additionalWrapperStyle = item.isAplied ? styles.activeWrapper : {}
    const additionalTextStyle = item.isAplied ? styles.activeText : {}

    return (
        <>
            {
                index ? (
                    <TouchableOpacity style={[styles.templateWrapper, additionalWrapperStyle]} onPress={navigateToTemplateViewer}>
                        <Text style={[styles.templateStatus, additionalTextStyle]}>{status}</Text>
                        <View style={styles.nameWrapper}>
                            <Text style={[styles.templateTitle, additionalTextStyle]}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.templateWrapperNew} onPress={navigateToTemplateCreate}>
                        <Text style={styles.templateTitleNew}>Add new template</Text>
                        <View style={styles.newTemplateButtonWrapper}>
                            <Plus fill={colors.white}/>
                        </View>
                    </TouchableOpacity>
                )
            }
        </>
    )
}


const Templates = ({ navigation }) => {

    const templates = useSelector(store => store.templates.templates)
    const processedTemplates = [0, ...templates]

    return (
        <View style={styles.wrapper}>
            <Tab
                headerTitle="Templates"
                style={{flex: 1}}
            >
                <View style={styles.templatesWrapper}>
                    <FlatList
                        style={styles.categoriesList}
                        data={processedTemplates}
                        renderItem={({ item, index }) => renderTemplatesList(item, index, navigation)}
                        contentContainerStyle={styles.listContentContainer}
                    />
                </View>
            </Tab>
        </View>
    )
}

export default Templates