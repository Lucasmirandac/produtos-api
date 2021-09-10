import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUmProduto(@Param() params): Produto {
    return this.produtosService.obterUmProduto(params.id);
  }

  @Post()
  criarProduto(@Body() produto: Produto) {
    this.produtosService.criarProduto(produto);
  }

  @Put()
  alterarProduto(@Body() produto: Produto): Produto {
    return this.produtosService.alterarProduto(produto);
  }

  @Delete(':id')
  apagarProduto(@Param() params) {
    return this.produtosService.excluirProduto(params.id);
  }
}
