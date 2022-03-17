import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  subscription!: Subscription;

  @Input() newTask!: ITask;

  ngOnInit(): void {
    this.subscription = this.tasksService.getTasks().subscribe(tasks => {
      this.tasksList = tasks;
    });

    this.tasksService.taskToUpdate.subscribe(updatedTask => {
      if (this.tasksList && updatedTask) {
        this.tasksList = this.tasksList.map(task => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          } else {
            return task;
          }
        })
      }
    });
  }

  ngOnChanges(): void {
    if (this.newTask) {
      this.addTask(this.newTask);
    }
  }

  addTask(task: ITask) {
    this.tasksList.unshift(task);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
