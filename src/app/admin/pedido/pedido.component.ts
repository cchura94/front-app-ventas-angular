import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto/producto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'precio', 'subtotal','acciones'];
  dataSource = [];
  carrito:any[]= [];
  constructor(protected prodService:ProductoService) { }

  ngOnInit(): void {this.prodService.lista().subscribe(
      (res: any) => {
        this.dataSource = res.data;
        console.log(res)
      },
      (error) => {
        console.log(error);
        
      }
    )
  }

  addCarrito(prod: any){
    this.carrito.push(prod);
  }
  eliminarCarrito(indice: any){
    this.carrito.splice(indice, 1);
  }

}
