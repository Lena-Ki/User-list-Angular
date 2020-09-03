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
    {id: 1, name: 'Helen', sex: 'female', date: new Date(), marital: true, edu: 'uni', num: 8903, edit: false},
    {id: 2, name: 'Helen', sex: 'female', date: new Date(), marital: false, edu: 'uni', num: 8903, edit: true},
    {id: 3, name: 'Helen', sex: 'female', date: new Date(), marital: false, edu: 'uni', num: 8903, edit: false},
  ]

  editUser(id: number) {
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