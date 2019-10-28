import { Contract } from "./contract";
import { Custumer } from "../models/custumer.model";
import { Flunt } from "../../utils/funt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateCustumerContract implements Contract{
    errors: any[];
    
    validate(model: Custumer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome Invalido');
        flunt.isEmail(model.email, 'E-mail Invalido');
        flunt.isFixedLen(model.document, 11, 'CPF invalido');
        flunt.hasMinLen(model.password, 6, 'Senha invalida');
        
        this.errors = flunt.errors;
        return flunt.isValid();
    }


}