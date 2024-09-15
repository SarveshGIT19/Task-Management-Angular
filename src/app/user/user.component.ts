import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';


//const randomIndex= Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser = DUMMY_USERS[randomIndex];
 // Getter  
get imagePath(){
 return 'assets/users/' + this.avatar
}


@Input({required: true}) id!:string; 
@Input({required: true}) avatar!: string;
@Input({required: true}) name!: string;
@Output() select = new EventEmitter();

onSelectUser(){
  this.select.emit(this.id)
}


}
