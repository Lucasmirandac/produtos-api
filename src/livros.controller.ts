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
  obterTodos(): Livro[] {
    return this.LivrosService.obterTodos();
  }

  @Get(':id')
  obterUmLivro(@Param() params): Livro {
    return this.LivrosService.obterUmLivro(params.id);
  }

  @Post()
  criarLivro(@Body() livro: Livro) {
    this.LivrosService.criarlivro(livro);
  }

  @Put()
  alterarLivro(@Body() livro: Livro): Livro {
    return this.LivrosService.alterarLivro(livro);
  }

  @Delete(':id')
  excluirLivro(@Param() params) {
    return this.LivrosService.excluirLivro(params.id);
  }
}
