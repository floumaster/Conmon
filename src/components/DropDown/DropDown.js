import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import Close from '../Icons/Close';
import ArrowDown from "../Icons/ArrowDown";
import colors from "../../constants/colors";
import styles from "./DropDown.style";

const DropDown = ({ value, setValue, placeholder, dropdownStyles }) => {
    return (
        <SelectList 
            setSelected={(val) => setValue(val)} 
            data={value} 
            save="value"
            placeholder={placeholder}
            searchicon={() => {}}
            searchPlaceholder=""
            closeicon={
            <Close
                fill={colors.whiteBlue}
                width={20}
                style={{
                    height: 20,
                    margin: 0,
                    width: 20,
                    padding: 0
                }}
            />}
            arrowicon={
                <ArrowDown
                    fill={colors.whiteBlue}
                    width={20}
                    style={{
                        height: 20,
                        margin: 0,
                        width: 20,
                        padding: 0
                    }}
                />}
            boxStyles={styles.box}
            inputStyles={styles.boxText}
            dropdownStyles={[styles.dropDown, dropdownStyles]}
            dropdownItemStyles={styles.dropDownItem}
            dropdownTextStyles={styles.dropDownItemText}
        />
    )
}

export default DropDown