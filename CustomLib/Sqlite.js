import Sqlite from 'react-native-sqlite-storage'

export function openDatabase(dbName) {
  Sqlite.openDatabase(dbName)
}

