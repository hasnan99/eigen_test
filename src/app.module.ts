import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LibraryController } from 'src/library.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from 'src/entities/member.entity';
import { Book } from 'src/entities/book.entity';
import { Library } from 'src/library.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      password: '',
      username: 'root',
      entities: [Member, Book],
      database: 'eigen',
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([Member, Book]),
  ],
  controllers: [LibraryController],
  providers: [Library],
})
export class AppModule {}
