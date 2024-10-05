import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FilterComponent } from '../../projects/ngx-univarsal-table/src/lib/filter/filter.component';
import { TableComponent } from '../../projects/ngx-univarsal-table/src/lib/table/table.component';
import { BuyerService } from './services/buyer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'table-library';

  filterData: any[];
  constructor(public buyerService: BuyerService) {
    this.buyerService.getLocalBuyerList();
    this.filterData = this.buyerService.filterManageData;
  }
  applyFilter(params: any) {
    console.log(params)
  }
}
