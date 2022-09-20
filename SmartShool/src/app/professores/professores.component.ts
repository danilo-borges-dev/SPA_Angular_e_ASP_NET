import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public professorSelecionado: string = "";
  public idDoProfessorSelecionado: string = "";

  public professores = [
    { id: 1, nome: "Danilo", diciplina:  "Matemática"},
    { id: 2, nome: "João", diciplina:  "Programação"},
    { id: 3, nome: "Marcos", diciplina:  "Física"},
    { id: 4, nome: "Sueli", diciplina:  "Português"},
    { id: 5, nome: "Rosana", diciplina:  "Redação"},
  ];

  professorSelec (professor: any) {
    this.professorSelecionado = professor.nome;
    this.idDoProfessorSelecionado = professor.id;
  }

  voltar () {
    this.professorSelecionado = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
