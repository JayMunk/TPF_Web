import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../application/user';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  id: number;
  user: User;
  modifierUserForm: FormGroup;
  validMessage: string = "";


  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.findById(this.id).subscribe(data => {
      this.user = data;
    });

    this.modifierUserForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', Validators.required),
      vote: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });
  }

  get myController() {
    return this.modifierUserForm.controls;
  }

  public updateUser() {
    if (this.modifierUserForm.valid) {
      this.service.update(this.user.id, this.modifierUserForm.value).subscribe(data => {
        this.modifierUserForm.reset();
        console.log("passe ici2");
        this.router.navigateByUrl('/crud');
      });
    } else {
      this.validMessage = "Please fill the form before submitting!"
    }
  }

}
