import React from "react";
import { View, TextInput } from 'react-native'
import styles from "./Input.style";
import Tag from "../Icons/Tag";
import colors from "../../constants/colors";

const Input = ({ styleWrapper, placeholderTextColor, setValue, value, placeholder, Icon, inputWrapperStyle }) => {

    return (
        <View style={[styles.titleInputWrapper, inputWrapperStyle]}>
            {Icon && <View style={styles.iconWrapper}>
                <Icon />
            </View>}
            <TextInput
                style={[styles.input, styleWrapper]}
                onChangeText={setValue}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || colors.subText}
            />
        </View>
    )
}

export default Input