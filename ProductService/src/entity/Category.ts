import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import {Product} from "./Product";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  categoryName: string;

  @OneToMany(() => Product, (categoryid) => categoryid.product)
  categoryid: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
