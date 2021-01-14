export class Actividades {

    public idactividad: number;
    public descripcion: string;

    constructor(
        idactividad: number,
        descripcion: string
    ) {
        this.idactividad = idactividad;
        this.descripcion = descripcion;
    }
}