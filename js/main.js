const form = document.getElementById("novoItem") 
const lista = document.getElementById("lista")
const itensMochila = JSON.parse(localStorage.getItem("itensMochila")) || []  

itensMochila.forEach( (bagagem) => {    
    criaMochila(bagagem)

} )

form.addEventListener("submit", (evento) => {  
    evento.preventDefault()

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existeItem = itensMochila.find(bagagem => bagagem.nome === nome.value);
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
        }

    if(existeItem) {

        itemAtual.id = existeItem.id

        atualizaMochila(itemAtual)

        itensMochila[itensMochila.findIndex(elemento => elemento.id === existeItem.id)] = itemAtual
    } else {
        itemAtual.id = itensMochila[itensMochila.length -1] ? (itensMochila[itensMochila.length-1]).id + 1 : 0;
        criaMochila(itemAtual)
        
    itensMochila.push(itemAtual)
    
    }    

    localStorage.setItem("itensMochila", JSON.stringify(itensMochila))

    nome.value = ""
    quantidade.value = ""
})



function criaMochila(itemBagagem) {  
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = itemBagagem.quantidade
    numeroItem.dataset.id = itemBagagem.id
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += itemBagagem.nome

    novoItem.appendChild(botaoDeleta(itensMochila))

    lista.appendChild(novoItem)
}

function atualizaMochila(itemBagagem) {
document.querySelector("[data-id='"+itemBagagem.id+"']").innerHTML = itemBagagem.quantidade

}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerHTML = "X"

    elementoBotao.addEventListener("click", function () {
        deletaElemento(this.parentNode, id)

    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()
    itensMochila.splice(itensMochila.findIndex(elemento => elemento.id === id) - 1)
    localStorage.setItem("itensMochila", JSON.stringify(itensMochila))

}


const objpessoa = {
    nome: "Aluizio",
    sobrenome: "Renato",
    profissâo: "advogado",
    telefone: "21986397734",
    idade: 52
}

console.log(objpessoa.sobrenome)


objpessoa.forEach( (name) => {    
    console.log(name);
} )