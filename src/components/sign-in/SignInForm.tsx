import React, { createRef, FC, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-simple-toast';
import { Formik } from 'formik'
import * as yup from 'yup'
import { signin } from '../../networking/OauthAPIService'
import { InputField } from '../shared/Inputs'
import { useTheme } from 'react-native-paper'
import { TextView } from '../TextView'
import GradientButton from '../Button/Button'

const reviewSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string()
  .required("Password is required")
  .min(8, "Must be 8 characters or more")
 })


type TProps = {
  scrollView: { current: ScrollView | null }
}

const SignInForm: FC<TProps> = ({ scrollView}) => {
  const [secureText, setSecureText] = useState(true)
  const { colors } = useTheme()
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={reviewSchema}
      onSubmit={async (values, actions) => {
          const params=values;
          const response=await signin(params)
             response.token?Toast.show('Successfuly login'):Toast.show(response.error);
      }}
    >
      {({ handleChange, values, handleBlur, touched, errors, handleSubmit }) => (
        <View style={[styles.container, { backgroundColor:colors.background}]}>
          <ScrollView
            contentContainerStyle={[styles.contentContainerStyle, { backgroundColor: colors.background,justifyContent:"center"}]}
            ref={scrollView}
          >
            <TextView title28 style={styles.titleTxt}>
              Log in
            </TextView>
            <View style={{ marginTop: '8%' }}>
              <InputField
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                inputStyle={null}
                inputContainerStyle={{ borderRadius: 30, paddingLeft: 24 }}
                onBlur={handleBlur('email')}
                errorMessage={touched.email && errors.email}
                returnKeyType='next'
                autoCapitalize='none'
                autoCompleteType='email'
                textContentType='emailAddress'
                keyboardType='email-address'
              />
              <InputField
                placeholder="password"
                onChangeText={handleChange('password')}
                secureTextEntry={secureText}
                value={values.password.trim()}
                inputStyle={null}
                inputContainerStyle={{ borderRadius: 30, paddingLeft: 24, paddingRight: 16 }}
                onBlur={handleBlur('password')}
                errorMessage={touched.password && errors.password}
                // innerRef={passwordRef}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                {}
              }
              style={styles.forgetPasswordContainer}
            >
              <TextView labelBold style={[styles.forgetPwdText]}>
                Forget Password
              </TextView>
            </TouchableOpacity>
           <GradientButton
                  title='login'
                  onPress={() =>handleSubmit()}
                  disabled={!values.email || !values.password}
                  buttonStyle={{ marginTop: 0 }}
                  titleStyle={{ color: colors.backdrop}}
                />

            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <View style={styles.line}></View>
              
                <View style={styles.line}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  )
}

export default SignInForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
  },
  titleTxt: {

    marginTop: '20%',
    marginLeft: 5,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: '8%',
    height: 52,
  },
  disblebtnContainer: {
    alignSelf: 'center',
    marginTop: '8%',
  },
  text: {
    marginBottom: 20,
    marginTop: 10,
  },
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  forgetPwdText: {
    textDecorationLine: 'underline',

  },
  line: {
    borderWidth: 1,
    width: '40%',
    borderColor: '#B4B4B4',
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
 
})
