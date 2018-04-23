import Sqlite from 'react-native-sqlite-storage'
import { DB_NAME } from './index'

Sqlite.enablePromise(true)

export default class sqlite {
  constructor() {
    this.db = (this.setDb())
    this.table = ''
    this.column = []
  }

  async setDb() {
    return (await Sqlite.openDatabase(DB_NAME))
  }

  async attach(db) {
    return (await db.attach(DB_NAME, DB_NAME))
  }
  async executeSql(db, query) {
    return (await db.executeSql(query))
  }

  async populateDb() {
    const migration = `
    CREATE TABLE IF NOT EXISTS AssetMaster(
      AssetTypeId varchar,
      AssetCode varchar,
      Description text,
      IsActive integer
    )`

    return (await this.executeSql(await this.db, migration))
  }

  async populateSeed() {
    const seed = `
      INSERT INTO AssetMaster
          (AssetTypeId,AssetCode,Description,IsActive)
      VALUES 
          ('4','1001','BARANG 1',1),
          ('4','1002','BARANG 2',1),
          ('4','1003','BARANG 3',1),
          ('4','1004','BARANG 4',0),
          ('4','1005','BARANG 5',1),
          ('4','1006','BARANG 6',1),
          ('4','1007','BARANG 7',1),
          ('4','1008','BARANG 8',1),
          ('4','1009','BARANG 9',1),
          ('4','10010','BARANG 10',1),
          ('4','10011','BARANG 11',1),
          ('4','10012','BARANG 12',0);`
    return (await this.executeSql(await this.db, seed))

  }

  setTable(tableName) {
    this.table = tableName;
    return this
  }

  select(columnName) {
    this.column = `${columnName.join(',')}`
    return this
  }

  async get() {
    query = `SELECT ${this.column} FROM ${this.table}`
    return (await this.executeSql(await this.db, query))

  }
}