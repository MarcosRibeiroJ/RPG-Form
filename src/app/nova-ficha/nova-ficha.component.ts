import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novaFicha',
  templateUrl: './nova-ficha.component.html',
  styleUrls: ['./nova-ficha.component.css']
})
export class NovaFichaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  adicionaSubgrupo(grupo, subgrupo) {
    var g = (<HTMLSelectElement>document.getElementById(grupo));
    var sg = (<HTMLSelectElement>document.getElementById(subgrupo));

    
  }

}
