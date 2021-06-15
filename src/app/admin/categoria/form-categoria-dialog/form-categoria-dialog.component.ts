import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-form-categoria-dialog',
  templateUrl: './form-categoria-dialog.component.html',
  styleUrls: ['./form-categoria-dialog.component.css']
})
export class FormCategoriaDialogComponent implements OnInit {

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl('')
  })
  id:number = 0;
  estado = false;
  constructor(protected catService: CategoriaService,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      if(data!=null){
        this.categoriaForm = new FormGroup({
          nombre: new FormControl(data.nombre, [Validators.required]),
          detalle: new FormControl(data.detalle)
        })
        this.id = data.id;
        this.estado = true;
      }


    }

  ngOnInit(): void {
  }

  guardarCategoria(){
    this.catService.guardar(this.categoriaForm.value).subscribe(
      (res) => {
        console.log(res)
        this.estado = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

  modificarCategoria(){
    this.catService.modificar(this.categoriaForm.value, this.id).subscribe(
      (res) => {
        console.log(res)
        this.estado = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
