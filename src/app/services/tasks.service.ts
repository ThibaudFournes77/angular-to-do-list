import { Injectable } from "@angular/core";
import { ITask } from "../interfaces/ITask";

@Injectable()
export class TasksService {
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

    getTasks(): ITask[] {
        return this.tasksList;
    }
}