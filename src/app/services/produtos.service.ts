import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  listProdutos() {
    return this.http.get<Produto[]>(`${urlBase}/cardapio`);
  }
}
