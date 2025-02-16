import { Component,OnInit  } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Category } from '../../interfaces/Product';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [NavbarComponent, MultiSelectModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  categories: Category[] = [
    {id:1, name: 'Electronics'},
    {id:2, name: 'Clothing'},
    {id:3, name: 'Furniture'},
    {id:4, name: 'Books'},
    {id:5, name: 'Miscellaneous'}
  ];
  
  formGroup!: FormGroup;

  ngOnInit(){
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      selectedCategories: new FormControl<Category[] | null>([])
    });
  }

}
