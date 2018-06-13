import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-list-detail',
  templateUrl: './to-do-list-detail.component.html',
  styleUrls: ['./to-do-list-detail.component.css']
})
export class ToDoListDetailComponent implements OnInit {
  
  @Input() addTodo: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(title: string): void{
    console.log(title);
  }

}
