import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
    selector: 'app-addproduct',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatCardModule, MatButtonModule],
    templateUrl: './addproduct.component.html',
    styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

    productform = this.builder.group({
        id: [0],
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: [1, Validators.required],
        status: [true],
    });

    constructor(private service: ProductService, private builder: FormBuilder) {
        
    }

    

    ProceedSave() {
        if (this.productform.valid) {
            //
        }
    }
}
