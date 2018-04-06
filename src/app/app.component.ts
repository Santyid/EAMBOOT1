import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApplication ';
  autor = 'Santiago Idarraga';
  count = 0;
  imgSource = './../favicon.ico';
  estado =  false ;
}
