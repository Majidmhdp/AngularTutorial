import { NewTaskModel } from './new-task/new-task.model';
import { DUMMY_TASKS } from './dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksServices {
  tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addNewTask(userId: string, taskData: NewTaskModel) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}