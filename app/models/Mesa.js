class Mesa {
    constructor(id) {
      this.id = id;
      this.capacidad = 6;
      this.clientes = [];
      this.estado = 1;
    }
}
// 1 Disponible
// 2 Ocupado
// 3 Sin_limpieza
// 4 En_limpieza
module.exports = Mesa;