import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: any;

  handleNewTask($event: any) {
    this.newTask = $event;
    console.log('handleNewTask', this.newTask);
  }
}
