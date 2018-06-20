import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../to-do';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  selectedToDo: ToDo;
  addTodo: boolean = false;

  todos: Observable<ToDo[]>;
  documentChanges: Observable<DocumentChangeAction<ToDo>[]>;

  selectedValue: string;

  @ViewChild('list') listRef;

  constructor(private todoService: TodoService, private db: AngularFirestore) { }

  ngOnInit() {
    this.todos = this.db.collection<ToDo>('todos').snapshotChanges().pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      }));
  }

  onSelect(listReference, todo: ToDo):void {
    todo.completed = listReference.selected;
    this.db.collection<ToDo>('todos').doc(todo.id).update({completed: todo.completed});
  }

  onDelete(todo): void {
    this.db.collection<ToDo>('todos').doc(todo.id).delete();
  }

  //Adds a todo when pressing enter in the form
  onKeyDown(event, value: string):void{
    if (event.key === "Enter") {
      let todo = {title: value, completed: false};
      this.db.collection('todos').add(todo);
    }
  }

  changeFilter(value: string): void{
    switch(value){
      case "unfinished":
        console.log("works");
        this.todos = this.todos.pipe(map(items => items.filter(todo => todo.completed === false)));
        break;
      case "finished":
        this.todos = this.todos.pipe(map(items => items.filter(todo => todo.completed === true)));
        break;
      case "all":
        this.ngOnInit();
        break;
    }

  }
}
