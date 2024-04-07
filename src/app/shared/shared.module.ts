import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    SidebarComponent,
    SearchBoxComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
