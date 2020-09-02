import { Component, Input, OnInit } from '@angular/core'

interface User {
  id: number
  name: string
  date: any
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  @Input() users: User[] = [
    {id: 1, name: 'Helen', date: new Date()},
    {id: 2, name: 'Kim', date: new Date()},
    {id: 3, name: 'Olga', date: new Date()},
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.users)
  }

}
