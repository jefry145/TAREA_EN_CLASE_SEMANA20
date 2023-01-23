import { Component } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad20clase';
  datos!:any[]
  constructor(private data:DataService) { }

  mostrar(){
    this.data.getData().subscribe(x=>this.datos=x)
  }
  ngOnInit(): void {
  }
}
