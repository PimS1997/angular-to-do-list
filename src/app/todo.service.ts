import { Injectable } from '@angular/core';
import { ToDo } from './to-do';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private todosSubject: Subject<ToDo[]> = new Subject();
 

  // constructor() {
  //   this.todosSubject.next([...this.todos]); 
  //  }

  // getTodos(): Observable<ToDo[]>{
  //   return this.todosSubject.asObservable();
  // }

  // addTodo(todo: ToDo): void{
  //   this.todosSubject.next([...this.todos, todo]);
  // }
}
