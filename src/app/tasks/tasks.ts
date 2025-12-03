import { Component, Input, EventEmitter } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { type NewTaskModel } from './new-task/new-task.model';
import { TasksServices } from './tasks.services';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask = false;
  // private tasksServices = new TasksServices();
  // private tasksServices: TasksServices;
  
  constructor(private tasksServices: TasksServices) {
    // tasksServices = this.tasksServices
  }
  
  get selectedUserTasks() {
    return this.tasksServices.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
