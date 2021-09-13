import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable() // transformando em provider
export class LivrosService {
  livros: Livro[] = [
    //new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    //new Livro('LIV01', 'Iniciando com flutter', 29.9),
    //new Livro('LIV01', 'Inteligencia artificial como produto', 29.9),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUmLivro(id: number): Livro {
    return this.livros[0];
  }
  criarLivro(livro: Livro) {
    return this.livros.push(livro);
  }

  alterarLivro(livro: Livro) {
    return livro;
  }

  excluirLivro(id: number) {
    return this.livros.pop();
  }
}
