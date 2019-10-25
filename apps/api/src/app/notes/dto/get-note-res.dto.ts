import { NoteDto } from '../model';

export class GetNoteResponseDto {
  total: number;
  data: NoteDto;
}
