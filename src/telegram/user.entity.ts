import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  telegramId!: string;

  @Column({ default: true })
  isSubscribed!: boolean;

  @Column({ default: false })
  isBlocked!: boolean; // Add this line
}