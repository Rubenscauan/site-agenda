import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Task from './Task'

export default class Categoria extends BaseModel {
  
  @hasMany(()=> Task)
  public tasks: HasMany<typeof Task>

  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public color: string

  @column()
  public nome: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
