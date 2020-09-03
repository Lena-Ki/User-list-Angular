import { Component, OnInit } from '@angular/core'
import { UsersService } from '../shared/users.service';

interface User {
  id: number
  name: string
  sex: string
  date: any
  marital: boolean
  edu: string
  num: number
  edit: boolean
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  editUser(id: number) {
    this.usersService.editUser(id)
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
  }

  id: number
  name: string
  sex: string
  date: any
  marital: boolean
  edu: string
  num: number

  addUser(name) {
    const user: User = {
      id: this.id,
      name: this.name,
      sex: this.sex,
      date: this.date,
      marital: this.marital,
      edu: this.edu,
      num: this.num,
      edit: false,
    }
    this.usersService.addUser(user)
  }
}
