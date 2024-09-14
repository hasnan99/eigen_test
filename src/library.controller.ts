import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Library } from './library.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Library')
@Controller('library')
export class LibraryController {
  constructor(private readonly library: Library) {}

  @Post('borrow/:memberId/:bookId')
  @ApiOperation({ summary: 'Meminjam buku' })
  async borrowBook(
    @Param('memberId') memberId: number,
    @Param('bookId') bookId: number,
  ) {
    return this.library.borrowBook(memberId, bookId);
  }

  @Post('return/:memberId/:bookId')
  @ApiOperation({ summary: 'Mengembalikan buku' })
  async returnBook(
    @Param('memberId') memberId: number,
    @Param('bookId') bookId: number,
    @Body() returnDate: Date,
  ) {
    return this.library.returnBook(memberId, bookId, returnDate);
  }

  @Get('books')
  @ApiOperation({ summary: 'Lihat semua buku yang tersedia' })
  async checkBooks() {
    return this.library.checkBooks();
  }

  @Get('members')
  @ApiOperation({ summary: 'Lihat semua member dan buku yang sedang dipinjam' })
  async checkMembers() {
    return this.library.checkMembers();
  }
}
