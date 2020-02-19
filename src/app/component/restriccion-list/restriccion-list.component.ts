import { Component, OnInit } from '@angular/core';
import { Restriccion } from 'src/app/domain/restriccion';
import { RestriccionService } from 'src/app/service/restriccion.service';

@Component({
  selector: 'app-restriccion-list',
  templateUrl: './restriccion-list.component.html',
  styleUrls: ['./restriccion-list.component.css']
})
export class RestriccionListComponent implements OnInit {
   listaRestriccion: Restriccion;
  constructor(public restriccionService: RestriccionService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.restriccionService.findAll().subscribe(data => {
      console.log(data);
      this.listaRestriccion = data;
    });
  }
}
