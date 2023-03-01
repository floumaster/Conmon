import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import colors from '../../constants/colors'

const FocusWrapper = ({ children, focused, color }) => (
  <View style={styles.wrapper}>
    {React.cloneElement(children, {
      fill: focused ? colors.whiteBlue : colors.subText,
      width: focused ? 28 : 23
    })}
  </View>
)

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options
  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <View style={styles.barStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index
        const TabBarIcon = options.tabBarIcon
        const title = options.title
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabStyle}
            key={index}
          >
            <FocusWrapper focused={isFocused} style={styles.iconWrapper}>
              <TabBarIcon />
            </FocusWrapper>
            <Text style={ isFocused ? styles.tabTitleActive : styles.tabTitle}>{title}</Text>
            <View style={ isFocused ? styles.underLineActive : styles.underLine} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    barStyle: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: colors.primary,
      justifyContent: 'space-around',
    },
    tabStyle: {
      flex: 1,
      height: 60,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    wrapper: {
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      height: 5,
      width: 25,
      paddingVertical: 0,
    },
    tabTitleActive: {
        color: colors.whiteBlue,
        fontWeight: 'bold',
        fontSize: 10,
    },
    tabTitle: {
      color: colors.subText,
      fontWeight: 'bold',
      fontSize: 10
    },
    underLineActive: {
      width: 55,
      height: 2,
      backgroundColor: colors.whiteBlue,
      top: 5
    },
    underLine: {
      width: 55,
      height: 2,
      backgroundColor: colors.subText,
      top: 5
    }
})

export default CustomTabBar
