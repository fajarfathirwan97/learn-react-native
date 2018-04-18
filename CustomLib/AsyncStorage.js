import { AsyncStorage } from 'react-native'

export async function setItem(key, value) {
  let setItem = await AsyncStorage.setItem(key, value)
  return setItem 
}

export async function getItem(key) {
  let getItem = await AsyncStorage.getItem(key)
  return getItem
}

export async function getToken() {
  return await getItem('token')
}