export interface Inventory {

  id: number;

  productoId: number;

  presentacion: string;

  cantidadIngresada: number;

  stockUnidades: number;

  stockMinimo: number;

  lote?: string;

  fechaVencimiento?: string;
}