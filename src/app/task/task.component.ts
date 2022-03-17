import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../interfaces/ITask';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: ITask;

  constructor(
    private tasksService: TasksService,
  ) { }

  onTaskDone(): void {
    const updatedTask = {
      ...this.task,
      isDone: !this.task.isDone,
    };
    this.tasksService.taskToUpdate.next(updatedTask);
  }

  ngOnInit(): void {
  }

}
