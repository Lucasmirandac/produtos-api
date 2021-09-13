import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Livro } from './livro.model'
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  LivrosService: any;
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.LivrosService.obterTodos();
  }

  @Get(':id')
  async obterUmLivro(@Param() params): Promise<Livro> {
    return this.LivrosService.obterUmLivro(params.id);
  }

  @Post()
  async criarLivro(@Body() livro: Livro) {
    this.LivrosService.criarlivro(livro);
  }

  @Put()
  async alterarLivro(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.LivrosService.alterarLivro(livro);
  }

  @Delete(':id')
  async excluirLivro(@Param() params) {
    return this.LivrosService.excluirLivro(params.id);
  }
}
