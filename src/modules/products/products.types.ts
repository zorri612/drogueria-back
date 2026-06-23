export interface Presentation {
  nombre: string;
  factor: number;
  permiteVenta: boolean;
}

export interface Product {
  id: number;

  nombre: string;

  descripcion?: string;

  tipo: string;

  presentaciones: Presentation[];
}