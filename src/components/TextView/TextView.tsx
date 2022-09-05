import React, { CSSProperties, FunctionComponent } from 'react'
import styles from './TextViewStyle'
import { Image, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'

type Props = {
  bigTitle?: boolean
  title?: boolean
  title28?: boolean
  smallTitle?: boolean
  smallTitleSF?: boolean
  smallTitleLight?: boolean
  smallItalic?: boolean
  bigLabel?: boolean
  label?: boolean
  labelBold?: boolean
  small?: boolean
  center?: boolean
  style?: CSSProperties
  Icon?: any
  IconStyle?: any
  numberOfLines?: number
  SvgIcon?: any
  SvgIconStyle?: any
  mode?: string
  containerStyle?: CSSProperties
}
const TextView: FunctionComponent<Props> = ({
  children,
  title,
  bigTitle,
  smallTitle,
  smallItalic,
  label,
  bigLabel,
  small,
  center,
  labelBold,
  style,
  Icon,
  IconStyle,
  numberOfLines,
  SvgIcon,
  SvgIconStyle,
  title28,
  smallTitleLight,
  smallTitleSF,
  containerStyle,
}) => {
  const { colors } = useTheme()
  return (
    <View style={[styles.views, containerStyle]}>
      {Icon && <Image source={Icon} style={[{ height: 15, width: 15, resizeMode: 'contain' }, IconStyle]} />}
      {SvgIcon && <View style={SvgIconStyle && SvgIconStyle}>{SvgIcon}</View>}
      <Text
        numberOfLines={numberOfLines ? numberOfLines : 99}
        style={[
          title && styles.title,
          title28 && styles.title28,
          smallTitle && styles.smallTitle,
          smallItalic && styles.smallItalic,
          bigTitle && styles.bigTitle,
          bigLabel && styles.bigLabel,
          label && styles.label,
          small && styles.small,
          { color: colors.text },
          center && styles.center,
  
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

export default TextView