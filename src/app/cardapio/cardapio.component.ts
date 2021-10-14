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
  categorias: string[] = [];
  quantidadeCarrinho = 0;
  total = 0;

  constructor(private produtosService: ProdutosService,
    private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.produtosService.listProdutos().subscribe( produtos => {
      this.produtos = produtos;
      this.quantidadeCarrinho = this.pedidoService.getQuantidadeTotal();
      this.total = this.pedidoService.getTotal();
      this.getCategorias();
    })
  }

  adicionaPedido(produto: Produto) {
    this.pedidoService.adicionaItemPedido(produto);
    this.quantidadeCarrinho = this.pedidoService.getQuantidadeTotal();
    this.total = this.pedidoService.getTotal();
  }

  getCategorias() {
    this.produtos.forEach(p => {
      if (!this.categorias.includes(p.categoria)) {
        this.categorias.push(p.categoria);
      }
    })
  }

  getProdutosPorCategoria(categoria: string) {
    return this.produtos.filter(p => p.categoria === categoria);
  }

}
