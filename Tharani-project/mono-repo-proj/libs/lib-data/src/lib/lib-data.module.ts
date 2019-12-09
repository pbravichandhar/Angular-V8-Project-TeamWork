import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibDataComponent } from './components/lib-data/lib-data.component';
import { ComponentComponent } from './component/component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LibDataComponent, ComponentComponent]
})
export class LibDataModule {}
