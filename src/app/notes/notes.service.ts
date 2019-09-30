import { Note } from "./note.model";
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 
export class NotesService {
    initialStoreValue = JSON.parse(localStorage.getItem('Note')) as Note;
    noteSelected = new BehaviorSubject<Note>(this.initialStoreValue);
    private notesStore = new BehaviorSubject<Note>(this.initialStoreValue);
    public observable$ = this.notesStore.asObservable();


    private notes: Note[] = [
        new Note({
            title: 'Note title', 
            data: '28.09.2019', 
            desc: 'Testing note',
            cont: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker',
            id: 1, 
            imgPath: 'https://cdn.pixabay.com/photo/2016/07/03/17/47/post-it-1495148_960_720.jpg'
        }),
        new Note({
            title: 'Another note title', 
            data: '28.09.2019', 
            desc: 'Another testing note', 
            cont: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker',
            id: 2, 
            imgPath: 'https://cdn.pixabay.com/photo/2016/07/03/17/47/post-it-1495148_960_720.jpg'
        })
    ];

    getNote() {
        return this.notes.slice();
    }

    selectNote(note) {
        this.noteSelected.next(note)
    }
}