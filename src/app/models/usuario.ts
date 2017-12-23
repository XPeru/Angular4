export interface Usuario {
    id_usuario: number,
    nombre: string,
    apellidos: string,
    imagen: string,
    email: string,
    create_time: Date,
    update_time: Date,
    is_active: Boolean,
    tipo: string
}
