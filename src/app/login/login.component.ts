import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected formLogin!: FormGroup;
  protected submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  OnInit() {
    this.formLogin = this.formBuilder.group({
      cpfCnpj: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addVehicle = this.formBuilder.group({
    licencePlateVehicle: ["", Validators.required],
    modelVehicle: ["", Validators.required],
    favoriteVehicle: ["", Validators.required],
    typeVehicle: ""
  })

  get getForm() {
    return this.formLogin.controls;
  }

  onSubmitLogin() {
    alert(JSON.stringify(this.addVehicle.value))
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }

    const body = {
      "cpfCnpj": "123.456.789-01",
      "senha": "jessica123"
    }
  }
}
