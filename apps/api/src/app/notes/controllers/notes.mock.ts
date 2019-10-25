import { NoteDto } from '../model/note.dto';

export const notesMock: NoteDto[] = [
  new NoteDto({id: 1, title: 'first element', description: 'lorem1'}),
  new NoteDto({id: 2, title: 'second element', description: 'lorem2'}),
  new NoteDto({id: 3, title: 'third element', description: 'lorem3'}),
  new NoteDto({id: 4, title: 'fourth element', description: 'lorem4'}),
];
