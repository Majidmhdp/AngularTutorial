import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskModel } from './new-task.model';
import { TasksServices } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  private tasksServices = inject(TasksServices);

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksServices.addNewTask(this.userId,{
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }); 

    this.close.emit();
  }
}
