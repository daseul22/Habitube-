import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { User } from './User';
@Entity()
export class Todobox extends BaseEntity {
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

  static JoinByUserId(id: number): Promise<any> {
    // join test
    return this.createQueryBuilder('todobox')
      .leftJoinAndSelect('todobox.user', 'user')
      .where('todobox.userid = :id', { id: id })
      .getMany();
  }

  static async ClearDB(): Promise<void> {
    // db clear
    await Todobox.clear();
    await User.query('SET FOREIGN_KEY_CHECKS = 0');
    await User.clear();
    await User.query('SET FOREIGN_KEY_CHECKS = 1');
  }
}
