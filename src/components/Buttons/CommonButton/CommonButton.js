import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./CommonButton.style";

const CommonButton = ({ text, onPress, style, disabled }) => {
    return (
        <TouchableOpacity style={disabled ? [styles.buttonWrapper, style, {opacity: 0.5}] : [styles.buttonWrapper, style]} onPress={onPress} disabled={disabled}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton