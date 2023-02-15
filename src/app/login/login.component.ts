import { ConfigService } from './../config/config.service';
import { User } from './models/user';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // protected formLogin!: FormGroup;
  protected submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService,
  ) {}

  OnInit() {
  }

  formLogin = this.formBuilder.group({
    cpfCnpj: ['', Validators.required],
    password: ['', Validators.required],
  });

  // addVehicle = this.formBuilder.group({
  //   licencePlateVehicle: ["", Validators.required],
  //   modelVehicle: ["", Validators.required],
  //   favoriteVehicle: ["", Validators.required],
  //   typeVehicle: ""
  // })

  // get getForm() {
  //   console.log("getForm");
  //   return this.formLogin.controls;
  // }

  onSubmitLogin() {
    console.log("onSubmitLogin");
    const path: string = '/login';
    alert(JSON.stringify(this.formLogin.value))
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }

    const payload = {
      "cpfCnpj": "123.456.789-01",
      "senha": "jessica123"
    }

    return this.configService.postLogin(path, payload).subscribe(user => console.log(user));
  }
}
