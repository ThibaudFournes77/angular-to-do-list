import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.taskForm.controls['priority'].setValue('high');
  }

  createForm() {
    this.taskForm = this.formBuilder.group({
      libelle: '',
      isDone: false,
      priority: '',
    });
  }

  onSubmit() {
    console.log(this.taskForm);
  }

}
