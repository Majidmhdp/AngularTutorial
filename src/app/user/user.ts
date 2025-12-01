import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  getPath = computed(() => 'images/users/' + this.selectedUser().avatar);

  // get getPath() {
  //   return 'images/users/' + this.selectedUser.avatar
  // }

  onClickUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
