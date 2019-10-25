import { NoteDto } from '../model';

export class GetNotesRequestDto {
  search: string;
  pageIndex: number;
  pageSize: number;
  total: number;
  data: NoteDto[];
}
