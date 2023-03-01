import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";


const IconWrapper = ({children, style, onPress, disabled}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={!onPress || disabled}
            style={[styles.wrapper, style]}
        >
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 48,
        width: 48,
        padding: 24,
        flexShrink: 0,
        flexGrow: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default IconWrapper