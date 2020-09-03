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
export class FormService {

  name: string

  addUser() {
    const user = {
      name: this.name,
    }
  }

}