import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../to-do';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoListDetailComponent implements OnInit {
  
  @Input() addTodo: boolean;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  onClick(title: string): void{
    let todo = {title: title, completed: false};
    this.db.collection('todos').add(todo);
    console.log(title);
  }

}
