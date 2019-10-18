import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prime-ng';
  cars: any = [];

    cols: any[];

    constructor() { }

    ngOnInit() {
        //this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cars = [
          {'vin': 'dsad231ff', 'Year': 2012, 'Brand': 'VW', 'Color': 'Orange'},
          {'vin': 'dsad231ff', 'Year': 2012, 'Brand': 'VW', 'Color': 'Orange'},
          {'vin': 'dsad231ff', 'Year': 2012, 'Brand': 'VW', 'Color': 'Orange'}
        ]
        this.cols = [
            { field: 'vin', header: 'Vin' },
            {field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }
}
