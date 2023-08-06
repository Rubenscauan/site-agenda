import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from 'App/Models/Categoria'
import Task from 'App/Models/Task'

export default class TasksController {
    public async store({ request, params, response }: HttpContextContract) {
        const body = request.body()
        const categoriaId = params.categoriaId

        await Categoria.findOrFail(categoriaId)

        body.categoriaId = categoriaId

        const task = await Task.create(body)


        response.status(201)

        return {
            message: 'task adicionada com sucesso!',
            data: task,
        }
    }
}
