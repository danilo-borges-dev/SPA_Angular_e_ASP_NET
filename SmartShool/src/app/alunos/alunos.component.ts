import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "Alunos";
  public idDeAluno = "Código";
  public alunoSelecionado!: Aluno;
  public idDoAlunoSelecionado: number = 0;

  public alunos = [
   { id: 1, nome: "Marta", sobrenome: "Rodrigues", telefone: 3532941066 },
   { id: 2, nome: "Paula", sobrenome: "Marques", telefone: 3532945622 },
   { id: 3, nome: "Laura", sobrenome: "Peireira", telefone: 3532659823 },
   { id: 4, nome: "Luiza", sobrenome: "Silva", telefone: 3532256546 },
   { id: 5, nome: "Lucas", sobrenome: "Reis", telefone: 353269856652 },
   { id: 6, nome: "Pedro", sobrenome: "Raimundo", telefone: 3536332565 },
   { id: 7, nome: "Paulo", sobrenome: "Borges", telefone: 3531256322 }
  ];

  alunoSelec (aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.idDoAlunoSelecionado = aluno.id;
  }

  voltar () {
    this.alunos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
