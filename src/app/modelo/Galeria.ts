export class Galeria {

    public idgaleria: number;
    public idproductor: number;
    public imagen: string;

    constructor(
        idgaleria: number,
        idproductor: number,
        imagen: string
    ){
        this.idgaleria = idgaleria;
        this.idproductor = idproductor;
        this.imagen = imagen;
    }
}