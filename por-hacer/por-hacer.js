

const fs = require('fs')

let listadoPorHacer = []

const guardarDB = () => {
    console.log('Guardando en json...')
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error("No se pudo grabar", err)
        console.log('Guardado exitosamente')
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

}

const getListado = () => {
    cargarDB()
    return listadoPorHacer
}

//Crear una tarea
const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer
}

//Actualizar una tarea
const actualizar = (descripcion, completado) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        return guardarDB()
    }
    
    return console.log('No existe la tarea por hacer')
}

const borrar = (descripcion) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion)

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB()
        return true
    }
    return false
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}