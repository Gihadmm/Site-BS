
//declaração de constantes e aplicação de seus valores com base o elemento do código
const open = document.getElementById('open')
const container_modal = document.getElementById("container_modal")
const close = document.getElementById('close')

//seleciona o formulario e adiciona um evento quando a ação "submit" ocorrer
document.querySelector('form').addEventListener('submit', event => {

    //adiciona a classe 
    open.addEventListener('click', () =>{
        container_modal.classList.add('show')
    })

    //Remove a classe
    close.addEventListener('click', () =>{
        container_modal.classList.remove('show')
    })



    //pra não enviar o formulario
    event.preventDefault
})



//Mascara da biblioteca InputMask-Jquery
$("#cpf").inputmask({"mask": "999.999.999-99"});
$("#tel").inputmask({"mask": "(99) 99999-9999"});
