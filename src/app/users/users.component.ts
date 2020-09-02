import { Component, Input, OnInit } from '@angular/core'

interface User {
  id: number
  name: string
  sex: string
  date: any
  marital: string
  edu: string
  num: number
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  @Input() users: User[] = [
    {id: 1, name: 'Helen', sex: 'female', date: new Date(), marital: 'single', edu: 'uni', num: 8903},
    {id: 2, name: 'Helen', sex: 'female', date: new Date(), marital: 'single', edu: 'uni', num: 8903},
    {id: 3, name: 'Helen', sex: 'female', date: new Date(), marital: 'single', edu: 'uni', num: 8903},
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.users)
  }

}
