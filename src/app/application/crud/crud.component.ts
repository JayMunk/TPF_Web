import { Component, OnInit } from '@angular/core';
import { ReactiveService } from '../reactive.service';
import { UserService } from './../../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public headElements = ['ID', 'Prénom', 'Nom', 'Pays', 'Vote', 'Action possible'];
  listUsers: User[];
  constructor(private service: UserService, private service2: ReactiveService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.service2.findAll().subscribe(data => { this.listUsers = data; })
  }

  getUserById(id: number) {
    this.service2.findAll().subscribe(data => { this.listUsers = data; })
  }

  deleteById(id: number) {
    if (window.confirm('Are you sure?')) {
      this.service2.deleteById(id).subscribe(resultat => {
        this.listUsers = this.listUsers.filter(element => element.id != id);
      });
    }
  }
}
