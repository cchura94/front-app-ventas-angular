import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from '../../categoria/categoria.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-form-producto-dialog',
  templateUrl: './form-producto-dialog.component.html',
  styleUrls: ['./form-producto-dialog.component.css']
})
export class FormProductoDialogComponent implements OnInit {

  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    cantidad: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    categoria_id: new FormControl('')
  })
  id:number = 0;
  estado = false;
  lista_categorias:any[] = [];

  constructor(protected prodService: ProductoService,
    protected catService: CategoriaService,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      
       if(data!=null){
        this.productoForm = new FormGroup({
          nombre: new FormControl(data.nombre, [Validators.required]),
          cantidad: new FormControl(data.cantidad),
          precio: new FormControl(data.precio),
        descripcion: new FormControl(data.descripcion),
        imagen: new FormControl(data.imagen),
        categoria_id: new FormControl(data.categoria_id)
        })
        this.id = data.id;
        this.estado = true;
      }}

  ngOnInit(): void {
    this.catService.lista().subscribe(
      (req: any) => {
        this.lista_categorias = req;
        console.log(this.lista_categorias)
      }
    )
  }

  guardarProducto(){
    this.prodService.guardar(this.productoForm.value).subscribe(
      (res) => {
        console.log(res)
        this.estado = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

  modificarProducto(){
    this.prodService.modificar(this.productoForm.value, this.id).subscribe(
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
