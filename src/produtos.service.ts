import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable() // transformando em provider
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV01', 'Iniciando com flutter', 29.9),
    new Produto('LIV01', 'Inteligencia artificial como produto', 29.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUmProduto(id: number): Produto {
    return this.produtos[0];
  }
  criarProduto(produto: Produto) {
    return this.produtos.push(produto);
  }

  alterarProduto(produto: Produto) {
    return produto;
  }

  excluirProduto(id: number) {
    return this.produtos.pop();
  }
}
