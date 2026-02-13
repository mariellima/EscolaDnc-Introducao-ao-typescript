import type GetRequest from "../dtos/get.request.ts";
import type GetResponse from "../dtos/get.response.ts";
import BemVindoHelper from "../helpers/bemvindo.helper.js";

export default class GetHandler {
    static buildGetResponse(input: GetRequest): GetResponse {
        const response: GetResponse = {
          mensagem: BemVindoHelper.criarMensagem(input)
        }
        return response;
    }
}