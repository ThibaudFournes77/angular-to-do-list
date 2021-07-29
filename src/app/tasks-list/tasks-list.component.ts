import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../interfaces/ITask';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasksList!: ITask[];

  @Input() newTask!: ITask;

  ngOnInit(): void {
    this.tasksList = this.tasksService.getTasks();
  }

  ngOnChanges(): void {
    if (this.newTask) {
      this.addTask(this.newTask);
    }
  }

  addTask(task: ITask) {
    this.tasksList.unshift(task);
  } 

}
