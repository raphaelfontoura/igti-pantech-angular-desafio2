import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pedido } from '../model/pedido';
import { Produto } from '../model/produto';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  total: number = 0;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidos = this.pedidoService.listPedido();
    this.total = this.pedidoService.getTotal();
  }

  limparCarrinho() {
    this.pedidoService.limparPedidos();
    this.pedidos = [];
    this.total = 0;
  }

}
