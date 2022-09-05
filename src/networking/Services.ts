import { Method, callApi, } from './NetworkManager'
import { api } from './Environment'
export const editProfile = async ({ email, fullName, phoneNumber, profilePicture }) => {
    const data = { email, fullName, phoneNumber, profilePicture }
    const response = await callApi(api.editProfile, Method.PATCH, data, true, false)
    return response
}
export const getProfile = async () => {
    const data = null
    const response = await callApi(api.profiledetails, Method.GET, data, true, false)
    return response
}
export const createProfile = async ({ fullName, phoneNumber, profilePicture }) => {
    const data = { fullName, phoneNumber, profilePicture }
    const response = await callApi(api.createProfile, Method.POST, data, true, false)
    return response
}
export const requestPassword = async ({ email }) => {
    const data = { email }
    const response = await callApi(api.requestPassword, Method.PATCH, data, true, false)
    return response
}
export const resetPassword = async ({ email, resetHashCode, password }) => {
    const data = { email, resetHashCode, password }
    const response = await callApi(api.resetPassword, Method.PATCH, data, false, false)
    return response
}
export const changePassword = async ({ oldPassword, newPassword }) => {
    const data = { oldPassword, newPassword }
    const response = await callApi(api.changepassword, Method.PATCH, data, true, false)
    return response
}
