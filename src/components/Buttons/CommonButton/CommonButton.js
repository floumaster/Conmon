import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./CommonButton.style";
import Done from '../../Icons/Done'
import Clock from '../../Icons/Clock'

const CommonButton = ({ text, onPress, style, disabled, textStyle, isIconShown, isCompleted }) => {

    return (
        <TouchableOpacity style={disabled ? [styles.buttonWrapper, style, {opacity: 0.5}] : [styles.buttonWrapper, style]} onPress={onPress} disabled={disabled}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
            {isIconShown && <View style={isCompleted ? styles.readyIconWrapper : styles.pendingIconWrapper}>
                {isCompleted ? <Done width={16}/> : <Clock width={16}/>}
            </View>}
        </TouchableOpacity>
    )
}

export default CommonButton