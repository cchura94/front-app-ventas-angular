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
import { FormCategoriaDialogComponent } from './categoria/form-categoria-dialog/form-categoria-dialog.component';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductoDialogComponent } from './producto/form-producto-dialog/form-producto-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriaComponent,
    ProductoComponent,
    ProveedorComponent,
    PedidoComponent,
    UsuarioComponent,
    NavegacionComponent,
    FormCategoriaDialogComponent,
    FormProductoDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
