import { Module } from '@nestjs/common';
import { NotesController } from './controllers/notes.controller';

@Module({
  imports: [],
  controllers: [NotesController],
})
export class NotesModule {
}
