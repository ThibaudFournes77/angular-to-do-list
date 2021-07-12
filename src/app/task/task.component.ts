import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task!: ITask;
  isDone: boolean = false;

  onTaskDone(): void {
    this.task.isDone = true;
  }

  ngOnInit(): void {
  }

}
