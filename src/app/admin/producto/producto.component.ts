import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormProductoDialogComponent } from './form-producto-dialog/form-producto-dialog.component';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'precio', 'subtotal','acciones'];
  dataSource = [];

  constructor(public dialog: MatDialog, protected prodService:ProductoService) { }

  ngOnInit(): void {
    this.prodService.lista().subscribe(
      (res: any) => {
        this.dataSource = res.data;
        console.log(res)
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  mostrarDialogProducto(datos=null){
    if(datos == null){

      this.dialog.open(FormProductoDialogComponent, {
        width: '550px'
      })
    }else{
      this.dialog.open(FormProductoDialogComponent, {
        width: '550px',
        data: datos
      })
    }
  }

  eliminarProducto(dato: any){
    //this.dataSource.splice(2, 1);
    if(confirm("Esta seguro de eliminar la categoria?")){
      this.prodService.eliminar(dato.id).subscribe(
        (res) => {
          console.log(res)
        },
        (error: any) => {
          console.log(error)
        }
      )

    }
  }

}
