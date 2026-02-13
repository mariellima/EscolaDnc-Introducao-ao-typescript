import { parse } from "node:path";
import type PostRequest from "../dtos/post.request.ts"
import type PostResponse from "../dtos/post.response.ts"
import IdadeHelper from "../helpers/idade.helper.js";
import DataHelper from "../helpers/data.helper.js";

export default class PostHandler {
    static buildPostResponse(input: PostRequest): PostResponse {
        const response: PostResponse = {
            id: Math.random().toString(),
            nome: input.nome,
            email: input.email,
            ehAdulto: IdadeHelper.ehAdulto(parseInt(input.idade)),
            dataCadastro: DataHelper.obterDataAgora()
        }
        return response;
    }
}