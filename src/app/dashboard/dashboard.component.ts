import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';


interface Product{
  id: number,
  name:string,
  price: number,
  quantity: number,
  status:string,
  category: string[]
}

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, TableModule, TagModule, RatingModule, ButtonModule, CommonModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products : Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 40,
      quantity: 3,
      status:"INSTOCK",
      category: ["Category 1", "Category 2"]
    },
    {
      id: 2,
      name: "Product 2",
      price: 50,
      quantity: 2,
      status: 'LOWSTOCK',
      category: ["Category 1", "Category 2"]
    },
    {
      id: 3,
      name: "Product 3",
      price:60,
      quantity: 0,
      status: 'OUTOFSTOCK',
      category: ["Category 1", "Category 2"]
    }
  ]
  getSeverity(status: string) {
      if(status =='INSTOCK') return 'success';
      if(status == 'LOWSTOCK')
        return 'warn';
      return "danger"
  }
}
