import { Injectable } from '@angular/core';
import { ToDo } from './to-do';
import { TODOS } from './mock-to-dos';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): ToDo[]{
    return TODOS
  }
}