import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent {
  typeVehicle = new FormControl('CARRO');

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  addVehicle = this._formBuilder.group({
    licencePlateVehicle: ["", Validators.required],
    modelVehicle: ["", Validators.required],
    favoriteVehicle: ["", Validators.required],
    typeVehicle: ""
  })

  onSubmit() {
    alert(JSON.stringify(this.addVehicle.value))
  }
}
