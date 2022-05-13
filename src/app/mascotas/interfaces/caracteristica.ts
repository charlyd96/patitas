import { ValorCaracteristica } from './ValorCaracteristica';
export interface Caracteristica {
  descripcion: string;
  respuesta?: string;
  valoresPosibles?: ValorCaracteristica[];
}
