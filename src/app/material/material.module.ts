import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

let componentesMaterial = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    componentesMaterial
  ],
  exports: [
    componentesMaterial
  ]
})
export class MaterialModule { }
