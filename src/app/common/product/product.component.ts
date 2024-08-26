import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/Productmodel';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';



@Component({
    selector: 'app-product',
    standalone: true,
    imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatInputModule, CommonModule, MatDialogModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

    constructor(private service: ProductService, private dialog:MatDialog) { }

    displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
    dataSource!: MatTableDataSource<Product>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngOnInit(): void {
        this.LoadProduct();
    }

    productlist: Product[] = []

    LoadProduct() {
        this.service.GetAll().subscribe(item => {
            this.productlist = item;
            this.dataSource = new MatTableDataSource(this.productlist);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
    }

    CreateProduct() {
        this.OpenPopup();
    }

    OpenPopup() {
        this.dialog.open(AddproductComponent, {
            width:'50%',
            enterAnimationDuration:'500ms',
            exitAnimationDuration: '500ms'
        });
    }
}
