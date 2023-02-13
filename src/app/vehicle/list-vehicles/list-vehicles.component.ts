import { Component } from '@angular/core';
import { faCar, faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { vehicles } from 'src/app/core/mocks/vehicles';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.scss']
})
export class ListVehiclesComponent {
  iconCar = faCar;
  iconStar = faStar;
  iconEdit = faEdit;
  iconDelete = faTrash;

  listVehicle = vehicles.filter((veiculo) => veiculo.listVeiculo[0]);

  constructor() { }

  ngOnInit(): void {}

  isFavorite = true;
  isFavoriteVehicle() {
    if (this.isFavorite) {
      return this.isFavorite = false;
    } else {
      return this.isFavorite = true;
    }
  }
}
