import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { PedidoComponent } from './pedido/pedido.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriaComponent,
    ProductoComponent,
    ProveedorComponent,
    PedidoComponent,
    UsuarioComponent,
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ]
})
export class AdminModule { }
