import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Todobox } from './Todobox';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  keyword: string;

  @OneToMany((type) => Todobox, (todobox) => todobox.user)
  todoboxes: Todobox[];
}
