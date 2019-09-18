import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ctl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user: object;
  err: object;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService,
               private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
  });
  }

  get f() { return this.registerForm.controls; }

  register() {
      this.submitted = true;
      if (this.registerForm.invalid) {
       return;
     }
      this.authService.register(this.registerForm.value)
       .subscribe(
         res => { this.user = res;
                  console.log(res);
                  if (this.user) { this.toastrService.success('User registration successful. Please login now.'); }} ,
         err => this.err = err
        );

  }
}
