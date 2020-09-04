import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  BeforeInsert,
  AfterInsert,
} from 'typeorm';
import { Todobox } from './Todobox';
import * as crypto from 'crypto';

@Entity()
export class User extends BaseEntity {
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
