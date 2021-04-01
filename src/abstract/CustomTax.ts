export interface ICustomTax {
    id: string;
    Label: string;
    Gravamen: number;
    Selectivo: number;
    ITBIS: number;
    Observaciones: string;
}

export class CustomTax implements ICustomTax {
    id: string;
    Label: string;
    Gravamen: number;
    Selectivo: number;
    ITBIS: number;
    Observaciones: string;

    constructor(customTax: ICustomTax) {
        this.id = customTax.id;
        this.Label = customTax.Label;
        this.Gravamen = customTax.Gravamen;
        this.Selectivo = customTax.Selectivo;
        this.ITBIS = customTax.ITBIS;
        this.Observaciones = customTax.Observaciones;
    }
}

export default CustomTax;