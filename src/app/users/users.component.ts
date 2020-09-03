import { Component, OnInit } from '@angular/core'
import { UsersService } from '../shared/users.service';

interface User {
  id: number
  name: string
  sex: string
  date: number
  marital: boolean
  edu: string
  num: string
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

  toggleEdit(id: number) {
    this.usersService.toggleEdit(id)
  }

  public showForm: boolean = false
  
  toggleShow() {
    console.log('show form', this.showForm)
    this.showForm = !this.showForm
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
  }

  id: number
  name: string
  sex: string
  date: any
  marital: boolean = false
  edu: string
  num: string

  addUser() {
    const user: User = {
      id: this.usersService.users.length + 1,
      name: this.name,
      sex: this.sex,
      date: Date.parse(this.date),
      marital: this.marital,
      edu: this.edu,
      num: this.num,
      edit: false,
    }
    this.usersService.addUser(user)

  }

  editUser(id: number) {
    const user: User = {
      id: id,
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
