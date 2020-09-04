import {
  Entity,
  BeforeInsert,
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from 'typeorm';
import { User } from '../entity/User';
import * as crypto from 'crypto';

@EventSubscriber()
export class UserHooks implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }
  cryptoSha1(str: string): string {
    let shasum: string = crypto.createHash('sha1').update(str).digest('hex');
    return shasum;
  }
  beforeInsert(event: InsertEvent<User>) {
    let beforePW = event.entity.password;
    let cryptoPW: string = this.cryptoSha1(beforePW);
    event.entity.password = cryptoPW;
  }
}
