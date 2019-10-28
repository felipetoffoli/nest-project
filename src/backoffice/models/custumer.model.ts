import { Pet } from "./pet.model";
import { Address } from "./address.model";
import { CreditCard } from "./credit-card.model";

export class Custumer {
    constructor(
        public name: string,
        public document: string,
        public email: string,
        public pets: Pet[],
        public billingAddress: Address,
        public shippingAdress: Address,
        public creditCard: CreditCard,
        public password: string,
        public active: boolean ) {

    }
   
}