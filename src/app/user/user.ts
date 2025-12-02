import { Component, Input, input, signal, computed, Output, output, EventEmitter } from '@angular/core';
// import { required } from '@angular/forms/signals';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string; 
  };
  // @Input({ required: true }) name: string = '';
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // getPath = computed(() => 'images/users/' + this.selectedUser().avatar);

  get getPath() {
    // return 'images/users/' + this.selectedUser.avatar
    return 'images/users/' + this.user.avatar;
  }

  onClickUser() {
    //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //   // this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }
}
