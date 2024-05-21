import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'I love Desenvolvimento',
      autoria: 'Rafael',
      modelo: 'modelo3',
    },
    {
      conteudo: 'I love Desenvolvimento',
      autoria: 'David',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'I love DesenvolvimentoI love DesenI love DesenvolvimentoI love DesenvolvimentoI love DesenvolvimentoI love DesenvolvimentoI love DesenvolvimentoI love DesenvolvimentoI love DesenvolvimentovolvimentoI love DesenvolvimentoI love DesenvolvimentoI I love DesenvolvimentoI love DesenvolvimentoI love DesenvolvimentoI love Desenvolvimentolove DesenvolvimentoI love Desenvolvimento',
      autoria: 'David',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
