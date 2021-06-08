import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { PedidoComponent } from './pedido/pedido.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    CategoriaComponent,
    ProductoComponent,
    ProveedorComponent,
    PedidoComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
