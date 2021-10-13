import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { Produto } from '../model/produto';
import { ProdutosService } from './produtos.service';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedido: Pedido[] = [];
  total= 0;
  quantidadeTotal = 0;

  constructor() { }

  adicionaItemPedido(produto: Produto) {
    const index = this.pedido.findIndex( p => p.item.descricao == produto.descricao);
    if (index < 0) {
      this.pedido.push({item: produto, quantidade: 1});
    } else {
      this.pedido[index].quantidade++;
    }
    this.total += produto.preco;
    this.quantidadeTotal ++;
  }

  listPedido() {
    return this.pedido;
  }

  getTotal() {
    return this.total;
  }

  getQuantidadeTotal() {
    return this.quantidadeTotal;
  }

  limparPedidos() {
    this.pedido = [];
    this.total = 0;
    this.quantidadeTotal = 0;
  }
 
}
