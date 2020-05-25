
const descripcion = {
    demand: true,
    alias: 'd'
}

const argv = require('yargs')
                            .command('crear', 'Crear una tarea por hacer', {
                                descripcion
                            })
                            .command('actualizar', 'Actualizar una tarea por hacer', {
                                descripcion,
                                completado: {
                                    default: true,
                                    type: 'boolean'
                                }
                            })
                            .command('borrar', 'Borrar una tarea por hacer', {
                                descripcion
                            })
                            .help().argv
module.exports = {
    argv
}                