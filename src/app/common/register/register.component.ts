import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, user } from '../../model/Loginmodel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  Roles: Role[] = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'supervisor', viewValue: 'Supervisor' },
    { value: 'manager', viewValue: 'Manager' },
  ];

  constructor(
    private builder: FormBuilder,
    private service: MasterService,
    private router: Router
  ) {}

  // registerform = this.builder.group({
  //   username: this.builder.control('', Validators.required),
  //   name: this.builder.control(
  //     '',
  //     Validators.compose([Validators.required, Validators.minLength(3)])
  //   ),
  //   email: this.builder.control(
  //     '',
  //     Validators.compose([Validators.email, Validators.required])
  //   ),
  //   role: this.builder.control('salesman', Validators.required),
  //   gender: this.builder.control('m', Validators.required),
  //   terms: this.builder.control(true),
  // });

  registerform = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    role: new FormControl('salesman', Validators.required),
    gender: new FormControl('m', Validators.required),
    terms: new FormControl(true),
  });
  ProceedRegister() {
    if (this.registerform.valid) {
      if (this.registerform.value.terms) {
        let _data: user = {
          id: this.registerform.value.username as string,
          password: this.registerform.value.password as string,
          name: this.registerform.value.name as string,
          email: this.registerform.value.email as string,
          role: this.registerform.value.role as string,
          gender: this.registerform.value.gender as string,
        };
        this.service.ProceedRegister(_data).subscribe((item) => {
          alert('Welcome ' + this.registerform.value.name);
          this.router.navigateByUrl('/login');
        });
      } else {
        alert('Please agree');
      }
    }
    // this.registerform.setValue({ username: 'admin', name: 'user' });
  }
}
