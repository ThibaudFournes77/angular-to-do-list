import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { ITask } from "../interfaces/ITask";

@Injectable()
export class TasksService {
    constructor(private httpClient: HttpClient) { }

    tasksList!: ITask[];

    taskToUpdate = new BehaviorSubject<ITask | null>(null);

    getTasks(): Observable<ITask[]> {
      return this.httpClient.get<ITask[]>('http://localhost:5000/');
    }
}