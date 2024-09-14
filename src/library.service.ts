import { Injectable } from '@nestjs/common';
import { Member } from 'src/entities/member.entity';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan } from 'typeorm';

@Injectable()
export class Library {
  constructor(
    @InjectRepository(Member) private memberRepo: Repository<Member>,
    @InjectRepository(Book) private bookRepo: Repository<Book>,
  ) {}

  async borrowBook(memberId: number, bookId: number): Promise<string> {
    const member = await this.memberRepo.findOne({
      where: { id: memberId },
      relations: ['borrowedBooks'],
    });
    const book = await this.bookRepo.findOne({ where: { id: bookId } });

    if (member.penaltyUntil && new Date() < member.penaltyUntil) {
      return 'Member sedang terkena penalti.';
    }
    if (member.borrowedBooks.length >= 2) {
      return 'Member tidak bisa meminjam lebih dari 2 buku.';
    }
    if (book.stock <= 0) {
      return 'Buku ini sedang dipinjam oleh member lain.';
    }

    const borrowdate = new Date();
    member.borrowedBooks.push(book);
    book.borrowed_date = borrowdate;
    member.booksBorrowed += 1;
    book.stock -= 1;
    await this.memberRepo.save(member);
    await this.bookRepo.save(book);

    return 'Buku berhasil dipinjam.';
  }

  async returnBook(
    memberId: number,
    bookId: number,
    returnDate: Date,
  ): Promise<string> {
    const member = await this.memberRepo.findOne({
      where: { id: memberId },
      relations: ['borrowedBooks'],
    });
    const book = await this.bookRepo.findOne({
      where: { id: bookId, member: { id: memberId } },
    });

    if (!book) {
      return 'Buku ini bukan milik member yang dipinjam.';
    }

    const borrowDate = new Date(book.borrowed_date);
    const daysBorrowed = Math.ceil(
      (Date.parse(returnDate.toString()) - Date.parse(borrowDate.toString())) /
        (1000 * 3600 * 24),
    );

    if (daysBorrowed > 7) {
      member.penaltyUntil = new Date(
        returnDate.setDate(returnDate.getDate() + 3),
      );
    }

    member.borrowedBooks = member.borrowedBooks.filter((b) => b.id !== bookId);
    member.booksBorrowed -= 1;
    book.stock += 1;
    book.member = null;
    await this.memberRepo.save(member);
    await this.bookRepo.save(book);

    return 'Buku berhasil dikembalikan.';
  }

  async checkBooks(): Promise<Book[]> {
    return this.bookRepo.find({ where: { stock: MoreThan(0) } });
  }

  async checkMembers(): Promise<Member[]> {
    return this.memberRepo.find({ relations: ['borrowedBooks'] });
  }
}
