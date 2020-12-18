import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { ReactiveService } from './../reactive.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', Validators.required),
    vote: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
  });

  user: User;
  validMessage: string = "";

  constructor(private service: ReactiveService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(data => {
        this.userForm.reset();
        console.log("passe ici");
        this.router.navigateByUrl('/crud');
      });
    } else {
      this.validMessage = "Please fill the form before submitting!"
    }
  }
}
