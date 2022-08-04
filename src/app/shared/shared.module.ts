import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { ItemComponent } from './components/item/item.component';
import { OverviewPipe } from './overview.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    SelectOptionComponent,
    ItemComponent,
    OverviewPipe,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [
    HeaderComponent,
    LoadingComponent,
    SelectOptionComponent,
    ItemComponent,
  ],
})
export class SharedModule {}
