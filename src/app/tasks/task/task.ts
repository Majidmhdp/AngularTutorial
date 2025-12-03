import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskType } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksServices } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;

  private taskServices = inject(TasksServices);
  
  onCompleteTask() {
    this.taskServices.removeTask(this.task.id);
  }
}
