import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table
export class Livro extends Model<Livro>{
  [x: string]: any;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;
  @Column({
    type: DataType.DECIMAL(10,2),
    allowNull: false,
  })
  preco: number;
}
