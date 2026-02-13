import { parse } from "node:path";
import type GetRequest from "../dtos/get.request.ts";
import IdadeHelper from "./idade.helper.js";

export default class BemVindoHelper {
    static criarMensagem(input: GetRequest): string {
        
        let mensagem = "Bem-vindo ";

        if (input.nome) {
            mensagem = mensagem + input.nome + ", ";
        } else {
            mensagem = mensagem + "Visitante" + ", ";
        }

        if (input.idade) {
            const ehAdulto = IdadeHelper.ehAdulto(parseInt(input.idade));

            if (ehAdulto) {
                mensagem = mensagem + "Você é um adulto.";
            } else {
                mensagem = mensagem + "Você é um menor de idade.";
            }
            
        } else {
            mensagem = mensagem + "Idade não informada.";
        }

      

        return mensagem;
    }
}