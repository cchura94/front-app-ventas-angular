import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from './categoria.service';
import { FormCategoriaDialogComponent } from './form-categoria-dialog/form-categoria-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'detalle', 'acciones'];
  dataSource = [];

  constructor(public dialog: MatDialog, protected catService:CategoriaService) { }

  ngOnInit(): void {
    this.catService.lista().subscribe(
      (res: any) => {
        this.dataSource = res;
        console.log(res)
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  mostrarDialogCategoria(datos=null){
    if(datos == null){

      this.dialog.open(FormCategoriaDialogComponent, {
        width: '450px'
      })
    }else{
      this.dialog.open(FormCategoriaDialogComponent, {
        width: '450px',
        data: datos
      })
    }
  }

  eliminarCategoria(dato: any){
    //this.dataSource.splice(2, 1);
    if(confirm("Esta seguro de eliminar la categoria?")){
      this.catService.elimianr(dato.id).subscribe(
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
