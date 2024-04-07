import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "countries",
    loadChildren: () => import("./countries/countries.module").then(m => m.CountriesModule)
  },
  {
    path: "**",
    redirectTo: "countries"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
