export class AddressFormModel {
    constructor (
        public cep: string,
        public streetName: string,
        public number: string,
        public neighborhood: string,
        public city: string,
        public state: string,
        public complement: string,
    ) {}
}