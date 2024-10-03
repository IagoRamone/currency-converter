import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  membros = [
    {
      nome: 'Membro 1',
      cargo: 'Cargo 1',
      imagem: 'url_da_imagem_1', // substitua pela URL da imagem
      funcao: 'Função 1', // Adicione a função
      descricao: 'Descrição do Membro 1', // Adicione a descrição
    },
    {
      nome: 'Membro 2',
      cargo: 'Cargo 2',
      imagem: 'url_da_imagem_2', // substitua pela URL da imagem
      funcao: 'Função 2', // Adicione a função
      descricao: 'Descrição do Membro 2', // Adicione a descrição
    },
    {
      nome: 'Membro 3',
      cargo: 'Cargo 3',
      imagem: 'url_da_imagem_3', // substitua pela URL da imagem
      funcao: 'Função 3', // Adicione a função
      descricao: 'Descrição do Membro 3', // Adicione a descrição
    },
  ];

  constructor() {}
}
