import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categoria from 'App/Models/Categoria'

export default class CategoriasController {
    public async store({ request, response }: HttpContextContract) {
        const body = request.body()


        const categoria = await Categoria.create(body)

        response.status(201)

        return {
            message: "Categoria criada com sucesso!",
            data: categoria,
        }
    }

    public async index() {

        const categoria = await Categoria.query().preload('tasks')

        return {
            categoria
        }
    }

    public async show({ params }: HttpContextContract) {
        const categoria = await Categoria.findOrFail(params.id)

        return {
            nome: categoria.$attributes.nome,
            descricao: categoria.$attributes.descricao,
            color: categoria.$attributes.color
        }
        
    }

    public async destroy({ params }: HttpContextContract) {
        const destruida = await Categoria.findOrFail(params.id)

        await destruida.delete();

        return {
            massage: "Categoria destruida com sucesso",
            data: destruida
        }
    }


    public async update({ params, request }: HttpContextContract) {
        const body = request.body()

        const categoria = await Categoria.findOrFail(params.id)

        categoria.nome = body.nome
        categoria.descricao = body.descricao
        categoria.color = body.color

        

        await categoria.save()

            return {
                message: "deu certo!",
                data: categoria
            }

        }
    }



