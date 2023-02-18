import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';
  value: undefined


  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  
  onNome(evento: KeyboardEvent){
    this.nome = (<HTMLInputElement>evento.target).value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}