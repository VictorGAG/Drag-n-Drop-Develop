export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
          {
            id: 2,
            content: 'Recriar o pipefy para estudar drag in drop',
            labels: ['#7159c1'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
          {
            id: 4,
            content: 'Subir o codigo para o github',
            labels: ['#54e1f7'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
          {
            id: 5,
            content: 'fazer testes de deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Terminar estudos modulo 04',
            labels: ['#54e1f7'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Estudar Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
          {
            id: 8,
            content: 'Deixar o site drag in drop mais bonito',
            labels: ['#54e1f7'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: ['#7159c1'],
            user: 'https://www.nicepng.com/png/full/138-1384773_emoji-clipart-cactus-cacto-png.png'
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Fazer base do site drag in drop',
            labels: ['#7159c1'],
          },
          {
            id: 12,
            content: 'Configurar api',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Terminar de maratonar netflix',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }