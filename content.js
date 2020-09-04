//Aqui é o coração da extensão






// Este código seleciona a caixa e troca de cor em um determinado intervalo (1000 milisegundos)
const interval = setInterval(() => {
    const arquivoPermanente = document.querySelectorAll('[title="Arquivo permanente"]')
    if (arquivoPermanente){
        arquivoPermanente[1].style="background-color:powderblue;"
        clearInterval(interval)
        
        const input = document.createElement("input")
        input.type = "color"
        arquivoPermanente[1].parentElement.appendChild(input)

    }
}, 1000 )

/* Adicona um botão discreto ao lado de cada nome de caixa
ao clicar no botão abre o input de cores
ao selecionar a cor troca a cor de funda da caixa