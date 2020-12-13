import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';



const materialComponent = [
  MatButtonModule,
  MatIconModule, 
  MatInputModule, 
  MatFormFieldModule,
  MatCardModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModuleModule { }



