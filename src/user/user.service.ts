import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getSubscribedUsers(): Promise<User[]> {
    return this.userRepository.find({ where: { isSubscribed: true } });
  }

  async subscribeUser(telegramId: string): Promise<User> {
    let user = await this.userRepository.findOne({ where: { telegramId } });
    if (!user) {
      user = this.userRepository.create({ telegramId, isSubscribed: true });
    } else {
      user.isSubscribed = true;
    }
    return this.userRepository.save(user);
  }

  async unsubscribeUser(telegramId: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { telegramId } });
    if (user) {
      user.isSubscribed = false;
      return this.userRepository.save(user);
    }
    return null;
  }
}