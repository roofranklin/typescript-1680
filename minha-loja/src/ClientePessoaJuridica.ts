import { ClienteBase } from "./ClienteBase.js";

export class ClientePessoaJuridica extends ClienteBase {
    public razaoSocial: string;
    public cnpj: string;

    constructor(id: number, email: string, razaoSocial: string, cnpj: string) {
        super(id, email);
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
}