export interface Cliente {
  clienteId: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  fechaRegistro: Date;
  cuentas: Cuenta[];
}

export interface Cuenta {
  cuentaId: number;
  clienteId: number;
  tipoCuenta: string;
  saldo: number;
  fechaApertura: Date;
  transacciones: any[];
  tarjetas: any[];
}
