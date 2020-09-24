import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MercadolibreapiService } from 'src/app/services/mercadolibreapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mercadolibreapp';
  results: Observable<any>;
  productos = [];

  constructor( private mercadolibreService: MercadolibreapiService){}

  consultarServicio() {
    var   text= (document.getElementById("txtSearch") as HTMLInputElement).value;
    if ( text != ""){
      console.log ("hey");
      this.results = this.mercadolibreService.consultarProductos(text);
      this.results.subscribe(
        (data) => {
          console.log (data["results"]);
          console.log (data["results"][0]["thumbnail"]);
          this.productos = (data["results"]);
        }
      );
    }
    else{
      console.log ("entra");
      alert ("por favor ingrese un texto");
    }
  
  }

}
