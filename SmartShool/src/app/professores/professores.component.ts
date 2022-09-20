import { Component, OnInit } from '@angular/core';
import { Professor } from '../Models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public professorSelecionado!: Professor;
  public idDoProfessorSelecionado: number = 0;

  public professores = [
    { id: 1, nome: "Danilo", diciplina:  "Matemática"},
    { id: 2, nome: "João", diciplina:  "Programação"},
    { id: 3, nome: "Marcos", diciplina:  "Física"},
    { id: 4, nome: "Sueli", diciplina:  "Português"},
    { id: 5, nome: "Rosana", diciplina:  "Redação"},
  ];

  professorSelec (professor: Professor) {
    this.professorSelecionado = professor;
    this.idDoProfessorSelecionado = professor.id;
  }

  voltar () {
    this.professorSelecionado;
  }

  constructor() { }

  ngOnInit() {
  }

}
