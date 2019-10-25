import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { notesMock } from './notes.mock';
import { DeleteNoteResponseDto, GetNoteResponseDto, GetNotesRequestDto, GetNotesResponseDto, PostNoteResponseDto } from '../dto';
import { NoteDto } from '../model';

@Controller('notes')
export class NotesController {

  private dbNotesMock = notesMock;

  @Get()
  @ApiResponse({description: 'struktura danych response', status: 200, type: GetNotesResponseDto})
  getComments(@Query() query: GetNotesRequestDto): GetNotesResponseDto {
    let comments = this.dbNotesMock;
    if (query.search) {
      const queryReg = new RegExp(query.search, 'i');
      comments = this.dbNotesMock.filter(row => row.title.search(queryReg) >= 0);
    }
    const pageIndex = query.pageIndex || 0;
    const pageSize = query.pageSize || 5;
    const data = comments.slice(pageIndex * pageSize).slice(0, pageSize);
    return {
      pageIndex,
      pageSize,
      total: comments.length,
      data,
    };
  }

  @Get(':id')
  getComment(@Param('id') id: string): GetNoteResponseDto {

    const comment = this.dbNotesMock.find(c => c.id === parseInt(id, 10));

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    return {
      total: this.dbNotesMock.length,
      data: comment,
    };
  }

  @Post()
  postComments(@Body() data: NoteDto): PostNoteResponseDto {
    const note = new NoteDto({
      ...data,
      description: 'backend to mi ustawil',
      id: this.dbNotesMock.length + 1,
    });
    this.dbNotesMock.push(note);

    return {
      total: this.dbNotesMock.length,
      data,
    };
  }

  @Delete(':id')
  deleteComments(@Param('id') id: string): DeleteNoteResponseDto {
    this.dbNotesMock = this.dbNotesMock.filter(c => c.id !== parseInt(id, 10));
    return {
      total: this.dbNotesMock.length,
      id: +id,
    };
  }
}
