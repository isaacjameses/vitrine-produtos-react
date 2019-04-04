const INITIAL_STATE = {
  favoritos: [{
    id: Math.random(),
    url:'https://1.bp.blogspot.com/-VdH3GaedFDQ/WllWwPjhcNI/AAAAAAAAFIw/Pzv83YH77UYK_tIxTNRSlXjhRjTG_OQSwCLcBGAs/s1600/Favoritos.jpg',
    preco: 15,
    titulo: 'FAVORITO',
    descricao:'FAVORITO'
} ],
  comprados:[{
    id: Math.random(),
    url:'http://prosperatecnologia.com.br/blog/wp-content/uploads/2018/04/registrar-compras-650x350.jpg',
    preco: 100,
    titulo: 'COMPRADOS',
    descricao:'COMRPADOS'
    },
    {
        id: Math.random(),
        url:'http://prosperatecnologia.com.br/blog/wp-content/uploads/2018/04/registrar-compras-650x350.jpg',
        preco: 100,
        titulo: 'COMPRADOS',
        descricao:'COMRPADOS'
    },
    {
        id: Math.random(),
        url:'http://prosperatecnologia.com.br/blog/wp-content/uploads/2018/04/registrar-compras-650x350.jpg',
        preco: 100,
        titulo: 'COMPRADOS',
        descricao:'COMRPADOS'
    },
    {
        id: Math.random(),
        url:'http://prosperatecnologia.com.br/blog/wp-content/uploads/2018/04/registrar-compras-650x350.jpg',
        preco: 100,
        titulo: 'COMPRADOS',
        descricao:'COMRPADOS'
    }
],
  promocoes:[{
    id: Math.random(),
    url:'https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/07/Promo%C3%A7%C3%A3o-%C3%A9-a-alma-do-neg%C3%B3cio.png',
    preco: 25,
    titulo: 'PROMOCAO',
    descricao:'PROMOCAO'
    },
    {
        id: Math.random(),
        url:'https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/07/Promo%C3%A7%C3%A3o-%C3%A9-a-alma-do-neg%C3%B3cio.png',
        preco: 25,
        titulo: 'PROMOCAO',
        descricao:'PROMOCAO'
    },
    {
        id: Math.random(),
        url:'https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/07/Promo%C3%A7%C3%A3o-%C3%A9-a-alma-do-neg%C3%B3cio.png',
        preco: 25,
        titulo: 'PROMOCAO',
        descricao:'PROMOCAO'
    },
    {
        id: Math.random(),
        url:'https://portal-vendedor10.curriculum.com.br/wp-content/uploads/2016/07/Promo%C3%A7%C3%A3o-%C3%A9-a-alma-do-neg%C3%B3cio.png',
        preco: 25,
        titulo: 'PROMOCAO',
        descricao:'PROMOCAO'
    }
]
};

export default function prateleira(state= INITIAL_STATE, action){
    switch(action.type){
        case 'LISTAGEM':
            return INITIAL_STATE;

        case 'CADASTRAR_COMPRADOS':
            return {
                comprados: [state.comprados, action.produto],
                favoritos: state.favoritos,
                promocoes: state.promocoes
            };

        case 'CADASTRAR_FAVORITOS':
            return {
                comprados: state.comprados,
                favoritos:[...state.favoritos, action.produto],
                promocoes: state.promocoes};

        case 'CADASTRAR_PROMOCOES':
            return {
                comprados: state.comprados,
                favoritos:state.favoritos,
                promocoes: [...state.promocoes, action.produto]
            };

        case 'SEARCH':
            return {
                comprados: state.comprados.filter(produto => produto.titulo.toLowerCase().indexOf(action.titulo.toLowerCase()) !== -1),
                favoritos: state.favoritos.filter(produto => produto.titulo.toLowerCase().indexOf(action.titulo.toLowerCase()) !== -1),
                promocoes: state.promocoes.filter(produto => produto.titulo.toLowerCase().indexOf(action.titulo.toLowerCase()) !== -1)
            };
        
        default: return state;
    }
}
https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=PUBLIC_KEY&hash=${hash.hex()}