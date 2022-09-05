import React, { FC } from 'react'
import { NativeSyntheticEvent, StyleProp, StyleSheet, Text, TextInputFocusEventData, ViewStyle } from 'react-native'
import { Input } from 'react-native-elements'
import { width } from '../../assets/styles'
import { useTheme } from 'react-native-paper'

type Props = {
  value: string
  placeholder?: string
  onChangeText: (a: string) => void
  errorMessage: any
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  inputStyle?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
  secureTextEntry?: boolean
  rightIcon?: JSX.Element
  textLength?: any
  returnKeyType?: any
  onSubmitEditing?: () => void
  blurOnSubmit?: boolean
  keyboardType?: any
  autoCapitalize?: any
  autoCompleteType?: any
  textContentType?: any
  returnKeyLabel?: any
  maxLength?: number
}

const InputField: FC<Props> = ({
  value,
  placeholder,
  leftIcon,
  onChangeText,
  errorMessage,
  onBlur,
  inputStyle,
  inputContainerStyle,
  ...props
}) => {
  const { colors } = useTheme()
  return (
    <Input
      value={value}
      placeholder={placeholder}
      leftIcon={leftIcon}
      onChangeText={onChangeText}
      errorStyle={styles.errorStyle}
      errorMessage={typeof errorMessage !== 'boolean' ? errorMessage : undefined}
      inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      inputStyle={[styles.inputStyle, { color: colors.text }, inputStyle]}
      onBlur={onBlur}
      leftIconContainerStyle={styles.leftIconContainerStyle}
      secureTextEntry={props?.secureTextEntry}
      rightIcon={props?.rightIcon}
      returnKeyType={props?.returnKeyType}
      onSubmitEditing={props?.onSubmitEditing}
      blurOnSubmit={props?.blurOnSubmit}
      keyboardType={props?.keyboardType}
      autoCapitalize={props?.autoCapitalize}
      autoCompleteType={props?.autoCompleteType}
      textContentType={props?.textContentType}
      returnKeyLabel={props?.returnKeyLabel}
      maxLength={props?.maxLength}
    />
  )
}

const MultiLineInputField: FC<Props> = ({
  value,
  textLength,
  onChangeText,
  errorMessage,
  onBlur,
  inputContainerStyle,
  placeholder,
}) => {
  const { colors } = useTheme()
  return (
    <Input
      value={value}
      //@ts-ignore
      multiline={true}
      numberOfLines={4}
      placeholder={placeholder}
      rightIcon={textLength ? <Text style={{ color: '#909090' }}>{textLength.toString()}/150</Text> : null}
      onChangeText={onChangeText}
      errorStyle={styles.errorStyle}
      errorMessage={typeof errorMessage !== 'boolean' ? errorMessage : undefined}
      inputContainerStyle={[styles.multiLineContainer, inputContainerStyle]}
      inputStyle={[styles.multiLineTextInput]}
      onBlur={() => onBlur}
      maxLength={150}
      blurOnSubmit={false}
      rightIconContainerStyle={styles.textLengt}
    />
  )
}

export { InputField, MultiLineInputField }

const styles = StyleSheet.create({
  errorStyle: {
    color: '#F55858',
    maxWidth: '90%',
  },
  inputContainerStyle: {
    borderWidth: 0.7,
    borderRadius: 6,
    height: 48,
    width: width - 60,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 7,
    marginRight:15,

  },
  leftIconContainerStyle: {
    paddingLeft: 7,
  },
  multiLineContainer: {
    borderWidth: 0.5,
    borderRadius: 6,
    minHeight: 130,
    width: width - 60,
    marginTop: 20,
    backgroundColor: '#fdfdfd',
  },
  multiLineTextInput: {
    flex: 1,
    paddingHorizontal: 10,
    marginLeft: 8,
    marginTop: -85,
    paddingBottom: 5,
    fontSize: 16,
    color: '#000',
  },
  textLengt: {
    position: 'absolute',
    bottom: -10,
    right: 0,
  },
})
