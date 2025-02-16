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
import { Product } from '../../interfaces/Product';

import {RouterLink} from "@angular/router"

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, TableModule, TagModule, RatingModule, ButtonModule, 
          RouterLink,CommonModule,IconFieldModule,InputIconModule,InputTextModule],
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
      category: [
        {
          id: 1,
          name: "Category 1"
        },
        {
          id: 2,
          name: "Category 2"
        }
      ]
    },
    {
      id: 2,
      name: "Product 2",
      price: 50,
      quantity: 2,
      status: 'LOWSTOCK',
      category: [
        {
          id: 1,
          name: "Category 1"
        },
        {
          id: 2,
          name: "Category 2"
        }
      ]
    },
    {
      id: 3,
      name: "Product 3",
      price:60,
      quantity: 0,
      status: 'OUTOFSTOCK',
      category: [
        {
          id: 1,
          name: "Category 1"
        },
        {
          id: 2,
          name: "Category 2"
        }
      ]
    }
  ]
  getSeverity(status: string) {
      if(status =='INSTOCK') return 'success';
      if(status == 'LOWSTOCK')
        return 'warn';
      return "danger"
  }
}
