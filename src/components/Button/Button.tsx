import React, { FunctionComponent } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { TextView } from '../TextView'
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { useTheme } from 'react-native-paper'
import { width } from '../../assets/styles'


type Props = {
  color?: []
  title: string
  onPress?: () => void
  buttonStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  icon?: any
  loading?: boolean
  disabled?: boolean
}

const Button: FunctionComponent<Props> = ({
  title,
  disabled,
  loading,
  icon,
  titleStyle,
  buttonStyle,
  onPress,
  ...props
}) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity style={styles.proicon} onPress={onPress && onPress} disabled={disabled}>
      <LinearGradient
        {...props}
        colors={disabled ? [colors.grey5, colors.grey5] : [colors.primary, colors.notification]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={[styles.probtnNew, buttonStyle]}
      >
        <TextView
          labelBold
          style={[titleStyle, { color: disabled ? colors.backdrop : '#A7A7A7'}]}
          SvgIcon={icon}
          SvgIconStyle={{ marginRight: 10 }}
        >
          Login
        </TextView>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  proicon: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center', // new added 12/1/22
  },
  proinner: {
    marginLeft: 24,
  },
  maxwidth: { maxWidth: 250 },
  probtn: {
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
  },
  // new added 12/1/22
  probtnNew: {
    flex: 1,
    height: 50,
    borderRadius: 22,
    alignItems: 'center',
    width: width - 60,
    justifyContent: 'center',
    flexDirection: 'row',
  },
})