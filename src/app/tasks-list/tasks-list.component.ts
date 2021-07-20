import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor() { }

  tasksList: ITask[] = [
    {
      libelle: "Créer mon portfolio",
      isDone: true,
      priority: "high",
    },
    {
      libelle: "Publier un article sur Angular",
      isDone: false,
      priority: "high",
    },
    {
      libelle: "Ecrire un article sur React et Redux",
      isDone: false,
      priority: "med",
    },
    {
      libelle: "Créer un bloc personnalisé pour la page profil",
      isDone: false,
      priority: "low",
    },
  ];

  @Input() newTask!: ITask;

  ngOnInit(): void {
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
