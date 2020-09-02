import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';
@Entity()
export class Todobox {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  memoTitle: string;

  @Column()
  memoContents: string;

  @Column({ type: 'simple-json' })
  youtubeInfo: object;

  @Column({ type: 'boolean', default: false })
  isComplete: boolean;

  @Column()
  date: string;

  @Column()
  userId: number;

  @ManyToOne((type) => User, (user) => user.todoboxes)
  user: User;
}
