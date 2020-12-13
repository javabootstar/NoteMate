import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../../app/material-module/material-module.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [HeaderComponent, FooterComponent, MaterialModuleModule]
})
export class NotelayoutModule { }
