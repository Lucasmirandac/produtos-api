import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './livro.model';

@Injectable() // transformando em provider
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro){

  }

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.findAll();
  }

  async obterUmLivro(id: number): Promise<Livro> {
    return this.livroModel.findByPk(id);
  }
  async criarLivro(livro: Livro) {
    return this.livroModel.create(livro)
  }

  async alterarLivro(livro: Livro): Promise<[number,Livro[]]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id
      }
    })
  }

  async excluirLivro(id: number) {
    const livro: Livro = await this.obterUmLivro(id);
    livro.destroy;
  }
}
