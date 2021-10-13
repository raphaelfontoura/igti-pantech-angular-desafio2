import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { PedidoService } from '../services/pedido.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[] = [];
  quantidadeCarrinho = 0;

  constructor(private produtosService: ProdutosService,
    private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.produtosService.listProdutos().subscribe( produtos => {
      this.produtos = produtos;
      this.quantidadeCarrinho = this.pedidoService.getQuantidadeTotal();
    })
  }

  adicionaPedido(produto: Produto) {
    this.pedidoService.adicionaItemPedido(produto);
    this.quantidadeCarrinho = this.pedidoService.getQuantidadeTotal();
  }

}
