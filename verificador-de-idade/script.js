function verificar(){
    let data = new Date()
    let anoatual = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        // inicio declaração de variaveis
        let nimg = '' //nome da foyo que vai ser chamada
        let fsex = document.getElementsByName('radsex') //recebe o elemento com nome 'radsex', que nesse caso se refere a seleção: masculino ou feminino
        let idade = anoatual - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img') //criação do elemento de imagem no html
        // fim declaração de variaveis
        img.setAttribute('id', 'foto') //adicionando id no elemento img criado

        // nimg += pessoa(idade) //chamada de função para montar a identificação da foto

        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade <= 12 ){
                nimg = 'https://i.ibb.co/T243Xqj/foto-crianca-m.png'
            } else if (idade > 12 && idade <=29) {
                nimg = 'https://i.ibb.co/7VsfM5C/foto-jovem-m.png'
            } else if (idade > 29 && idade < 60) {
                nimg = 'https://i.ibb.co/YXtFvWt/foto-adulto-m.png'
            } else {
                nimg = 'https://i.ibb.co/rM3pPpr/foto-idoso-m.png'
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade <= 12 ){
                nimg = 'https://i.ibb.co/nmm4xvY/foto-crianca-f.png'
            } else if (idade > 12 && idade <=29) {
                nimg = 'https://i.ibb.co/L66n4SN/foto-jovem-f.png'
            } else if (idade > 29 && idade < 60) {
                nimg = 'https://i.ibb.co/C6krgBq/foto-adulto-f.png'
            } else {
                nimg = 'https://i.ibb.co/9tGxPCp/foto-idoso-f.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`

        img.setAttribute('src', `${nimg}`) //usado para encontrar a foto
        res.appendChild(img) //usado para adicionar a foto encontrada em baixo da frase  
    }
}