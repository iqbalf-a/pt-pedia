import { Component } from '@angular/core';
import { CategoryComponent } from '../../section/category/category.component';
import { ProductComponent } from '../../section/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
