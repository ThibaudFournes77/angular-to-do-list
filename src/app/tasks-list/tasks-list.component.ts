import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor() { }

  tasksList: string[] = [
    "Créer mon portfolio",
    "Publier un article sur Angular",
    "Ecrire un article sur React et Redux"
  ];

  ngOnInit(): void {
  }

}
