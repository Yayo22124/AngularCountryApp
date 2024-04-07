import { Component } from '@angular/core';

@Component({
  selector: 'ca-shared-loader',
  templateUrl: './loader.component.html',
  styles: `
    .spinner-container {
      position: fixed;
      bottom: 15px;
      right: 15px;
      align-items: center;
      border-radius: 20px;
      display: flex;
      color: white;
      background-color: blue !important;
      padding: 5px 10px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }

    span {
      margin-left: 5px;
    }
  `,
})
export class LoaderComponent {}
