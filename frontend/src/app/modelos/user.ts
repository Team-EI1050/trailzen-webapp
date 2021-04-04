import { Iuser } from "./Iuser";

export class user implements Iuser {
    _id: String;
    nickname: String;
    tipo: String = "USUARIO";


    constructor(id: String, nickname: String, tipo: String){
        this._id = id;
        this.nickname = nickname;
        this.tipo = tipo;
    }

}
