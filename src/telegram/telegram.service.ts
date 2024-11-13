import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../telegram/user.entity';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN must be defined in the environment variables');
    }
    this.bot = new Telegraf(token);
  }

  onModuleInit() {
    this.setupBot();
  }

  private setupBot() {
    this.bot.command('start', async (ctx) => {
      const telegramId = ctx.from.id.toString();
      let user = await this.userRepository.findOne({ where: { telegramId } });
      if (!user) {
        user = this.userRepository.create({ telegramId, isSubscribed: true });
        await this.userRepository.save(user);
      }
      ctx.reply('Welcome! You are now subscribed to daily weather updates.');
    });

    this.bot.command('stop', async (ctx) => {
      const telegramId = ctx.from.id.toString();
      const user = await this.userRepository.findOne({ where: { telegramId } });
      if (user) {
        user.isSubscribed = false;
        await this.userRepository.save(user);
      }
      ctx.reply('You have been unsubscribed from daily weather updates.');
    });

    this.bot.launch().catch(err => {
      console.error('Error launching Telegram bot:', err);
    });
  }

  async sendMessage(telegramId: string, message: string) {
    try {
      await this.bot.telegram.sendMessage(telegramId, message);
    } catch (error) {
      console.error(`Error sending message to ${telegramId}:`, error);
    }
  }
}