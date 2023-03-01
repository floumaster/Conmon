import React from "react";
import IconWrapper from "../Icons/IconWrapper";


const createIcon = (Icon, {width, height}) => {

    const defaultWidth = 48;
    const defaultHeight = 48;

    const IconComponent =
    ({ color, fill, opacity, style, onPress, width, height, disabled, ...rest }) => {

        return (
            <IconWrapper style={style} onPress={onPress} disabled={disabled}>
                <Icon
                    width={width || defaultWidth}
                    height={height|| defaultHeight}
                    color={color}
                    fill={fill}
                    opacity={opacity}
                    {...rest}
                />
            </IconWrapper>
        )
    };

    return IconComponent;
};

export default createIcon;