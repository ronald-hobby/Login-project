import { baseURL } from './Environment'
export const AUTHORIZE = 'AUTHORIZE'
export const NETWORK_ERROR = 'NETWORK ERROR'
export const EXPIRED_STATE = 3000204
export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}
var defaultHeaders: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const callApi = async (endPoint, method, data, isBearer, multipart) => {
  var url = baseURL + endPoint
  if (isBearer) {
    //get token from redux
    // defaultHeaders['Authorization'] = 'Bearer ' + userDetails?.access_token
  } else {
    delete defaultHeaders.Authorization
  }
  if (multipart) {
    defaultHeaders['Content-Type'] = 'multipart/form-data'
  }
  else {
    defaultHeaders['Content-Type'] = 'application/json'
  }
  try {
    let response = await fetch(url, {
      method: method,
      headers: defaultHeaders,
      body: method == Method.GET ? null : multipart ? data : JSON.stringify(data),
    })
    let responseJson = await response.json()
  
    return responseJson
  } catch (error) {
  }
}