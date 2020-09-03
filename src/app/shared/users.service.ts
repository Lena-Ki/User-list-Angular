import { Injectable } from '@angular/core'

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

@Injectable({providedIn: 'root'})
export class UsersService {
  public users: any[] = [
    {id: 1, name: 'Helen', sex: 'female', date: 764812800000, marital: true, edu: 'SpSU', num: 89034534543, edit: false},
    {id: 2, name: 'Helen Helen Helen Helen Helen', sex: 'female', date: 764812800000, marital: false, edu: 'MSU', num: 89033452133, edit: false},
    {id: 3, name: 'Helen', sex: 'female', date: 764812800000, marital: false, edu: 'KFU', num: 89032565776, edit: false},
  ]

  toggleEdit(id: number) {
    const idx = this.users.findIndex(u => u.id === id)
    this.users[idx].edit = !this.users[idx].edit
  }

  deleteUser(id: number) {
    this.users = this.users.filter(t => t.id !== id)
  }

  addUser(user) {
    this.users.push(user)
  }
}