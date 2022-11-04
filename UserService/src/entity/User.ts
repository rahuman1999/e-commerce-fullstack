import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Role } from "./Role";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;

  @Column("varchar")
  phone: string;

  @Column("varchar")
  country: string;

  @Column("varchar")
  image: string;

  @OneToOne(() => Role)
  @JoinColumn({ name: "role" })
  role: Role;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}
