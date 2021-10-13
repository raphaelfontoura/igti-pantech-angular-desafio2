import { Produto } from "./produto";

export interface Pedido {
  item: Produto;
  quantidade: number;
}
