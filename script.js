// Coletando o Body do HTML
let body = document.getElementById("body")

// Criando elementos HTML
let main     = document.createElement("main")
let h1       = document.createElement("h1")
let mensagem = document.createElement("h2")
let contagem = document.createElement("h2")
let fim      = document.createElement("h1")
let reset    = document.createElement("button")

let coluna1 = document.createElement("section")
let coluna2 = document.createElement("section")
let coluna3 = document.createElement("section")

let torre1 = document.createElement("div")
let torre2 = document.createElement("div")
let torre3 = document.createElement("div")

let disco4 = document.createElement("div")
let disco3 = document.createElement("div")
let disco2 = document.createElement("div")
let disco1 = document.createElement("div")

let start = document.createElement("p")
let offset = document.createElement("p")
let end = document.createElement("p")

// Adicionando Classes 
fim.classList.add("fimJogo")

coluna1.classList.add("coluna")
coluna2.classList.add("coluna")
coluna3.classList.add("coluna")

torre1.classList.add("torre")
torre2.classList.add("torre")
torre3.classList.add("torre")

disco1.classList.add("disco")
disco2.classList.add("disco")
disco3.classList.add("disco")
disco4.classList.add("disco")

// Adicionando Id's
reset.id = "reset"

coluna1.id = "coluna1"
coluna2.id = "coluna2"
coluna3.id = "coluna3"

torre1.id = "torre1"
torre2.id = "torre2"
torre3.id = "torre3"

disco1.id = "disco1"
disco2.id = "disco2"
disco3.id = "disco3"
disco4.id = "disco4"

// Variável de Contagem
let soma = 0

// Adicionando Innertext
h1.innerText       = "Torre de Hanoi"
mensagem.innerText = "Você não pegou nenhum disco!"
contagem.innerText = "Você fez " + soma + " movimentos."
fim.innerText      = "Parabéns! Você Ganhou!"
reset.innerText    = "Reset"
start.innerText    = "Start"
offset.innerText   = "OffSet"
end.innerText      = "End"

// Adicionando Itens na Tela
body.appendChild(h1)
body.appendChild(fim)
body.appendChild(main)
main.appendChild(coluna1)
main.appendChild(coluna2)
main.appendChild(coluna3)
body.appendChild(reset)
body.appendChild(mensagem)
body.appendChild(contagem)

coluna1.appendChild(torre1)
coluna2.appendChild(torre2)
coluna3.appendChild(torre3)

torre1.appendChild(disco4)
torre1.appendChild(disco3)
torre1.appendChild(disco2)
torre1.appendChild(disco1)

coluna1.appendChild(start)
coluna2.appendChild(offset)
coluna3.appendChild(end)

// Clicando nas Colunas
coluna1.addEventListener("click", clicou)
coluna2.addEventListener("click", clicou)
coluna3.addEventListener("click", clicou)
// Clicando no Reset
reset.addEventListener("click", clicou)

// Função de Clicar
function clicou(event) {
  let clique = event.currentTarget
  let cliqueId = clique.id
  qualColuna(cliqueId)   
}

// Função do Jogo
let disco
let origem = true
let destino = false 

function qualColuna(cliqueId){
  
  // Clicando no Reset
  if(cliqueId === reset.id){
    torre1.appendChild(disco4)
    torre1.appendChild(disco3)
    torre1.appendChild(disco2)
    torre1.appendChild(disco1)
    disco = ""
    origem = true
    destino = false
    soma = 0 
    mensagem.innerText = "Você não pegou nenhum disco!"   
    contagem.innerText = "Você fez " + soma + " movimentos."
    fim.classList.remove("fimJogoAparece")
    fim.classList.add("fimJogo")
  }
  

  if(cliqueId === coluna1.id || cliqueId === coluna2.id || cliqueId === coluna3.id){ 
    if (cliqueId === coluna1.id){
      if (origem === true){
        // PEGANDO O DISCO DA TORRE 1
        if(torre1.childElementCount > 0 && destino === false){
          disco = torre1.lastChild  
          destino = true 
          mensagem.innerText = ""
        }
        // COLOCANDO O DISCO DA TORRE 1
        else if(torre1.childElementCount > 0 && destino === true && disco.clientWidth < torre1.lastChild.clientWidth){
          torre1.appendChild(disco) 
          destino = false    
          soma += 1 
          contagem.innerText = "Você fez " + soma + " movimentos."    
          
        }   
        else if(torre1.childElementCount > 0 && destino === true && disco.clientWidth > torre1.lastChild.clientWidth){
          disco = ""
          destino = false
          mensagem.innerText = "Esse disco não pode ir aí!!!"     
        }  
        else if(torre1.childElementCount < 1 && destino === true){
          torre1.appendChild(disco) 
          destino = false
          soma += 1 
          contagem.innerText = "Você fez " + soma + " movimentos."
        }  
      }    
    }
    if (cliqueId === coluna2.id){
      if (origem === true){
        // PEGANDO O DISCO DA TORRE 2
        if(torre2.childElementCount > 0 && destino === false){
          disco = torre2.lastChild   
          destino = true 
          mensagem.innerText = ""
        }
        // COLOCANDO O DISCO DA TORRE 2
        else if(torre2.childElementCount > 0 && destino === true && disco.clientWidth < torre2.lastChild.clientWidth){
          torre2.appendChild(disco) 
          destino = false
          soma += 1 
          contagem.innerText = "Você fez " + soma + " movimentos."
        }  
        else if(torre2.childElementCount > 0 && destino === true && disco.clientWidth > torre2.lastChild.clientWidth){
          disco = ""
          destino = false
          mensagem.innerText = "Esse disco não pode ir aí" 
        } 
        else if(torre2.childElementCount < 1 && destino === true){
          torre2.appendChild(disco) 
          destino = false
          soma += 1 
          contagem.innerText = "Você fez " + soma + " movimentos."
        }
      }    
    }
    if (cliqueId === coluna3.id){
      // PEGANDO O DISCO DA TORRE 3
      if (origem === true){
        if(torre3.childElementCount > 0 && destino === false){
          disco = torre3.lastChild  
          destino = true   
          mensagem.innerText = ""
        }
        // COLOCANDO O DISCO DA TORRE 3
        else if(torre3.childElementCount > 0 && destino === true && disco.clientWidth < torre3.lastChild.clientWidth){
          torre3.appendChild(disco) 
          destino = false
          soma += 1 
          contagem.innerText = "Você fez " + soma + " movimentos."
        } 
        else if(torre3.childElementCount > 0 && destino === true && disco.clientWidth > torre3.lastChild.clientWidth){
          disco = ""
          destino = false
          mensagem.innerText = "Esse disco não pode ir aí" 
        } 
        else if(torre3.childElementCount < 1 && destino === true){
          torre3.appendChild(disco) 
          destino = false
          soma += 1 
          contagem.innerText = "Você fez " + soma + " movimentos."
        }
      }    
    } 
    setTimeout(function() {
      if (torre3.childElementCount >= 4 && destino === false){
        fim.classList.remove("fimJogo")
        fim.classList.add("fimJogoAparece")
      }
    }, 1000);        
  }   
}