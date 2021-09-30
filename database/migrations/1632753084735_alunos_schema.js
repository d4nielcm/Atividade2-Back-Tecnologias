'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunosSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.integer('matricula').notNullable().unique()
      table.string('nome')
      table.string('sexo')
      table.string('data_de_nascimento')
      table.integer('ano_de_ingresso')
      table.string('curso')
      table.string('bolsista')
      table.string('disciplinas_cursadas')
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunosSchema
