import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7rFfh2cDYmAvPmZgY3aH8PjTyohz0ps1WGpr9jF67mDgaxtyveKZBOKU1hYd21NlI0c&usqp=CAU';

  valorAtual: string = '';
  
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: { novoValor: any; }){
    console.log(evento.novoValor);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
