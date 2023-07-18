// Guardar todas as classes dentro de um array
var menuItem = document.querySelectorAll('.item-menu')

// Seleção dos icones na sidebar
function select(){
    menuItem.forEach((item)=> //passando parametro com arrow function
        item.classList.remove('ativo') // vai remover dinamicamente uma classe de um item (item menu)
    )
    this.classList.add('ativo') // Removendo a classe ativo de um item que não foi clicado e adicionando-a em um item clicado
}


// Fazendo um escutador de eventos
menuItem.forEach((item)=>
    item.addEventListener('click', select) // Verificar sempre que o usuário clicar
)

//Expandir o menu
var expandir = document.querySelector('#btn-expandir') //Armazenando o ID na variável
var menuSide = document.querySelector('.menu-lateral') //Armazenando a class na variável
// Escutando um evento de click
expandir.addEventListener('click', function(){ //adicionar e remover uma classe dinamicamente
    menuSide.classList.toggle('expandir')  //Se existir a class expandir remova, se não, adicione
}) 