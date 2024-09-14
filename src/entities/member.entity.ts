import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  booksBorrowed: number;

  @Column({ nullable: true })
  penaltyUntil: Date | null;

  @OneToMany(() => Book, (book) => book.member)
  borrowedBooks: Book[];
}
