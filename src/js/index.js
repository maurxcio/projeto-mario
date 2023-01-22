/* 
COMENTÁRIO: esse é meu primeiro código JAVA :)
**Comentários não devem ser utilizados em empresas, somente para estudo, mas é assim q se faz um */
// COMENTÁRIOS em somente uma linha podem ser feitos utilizando duas barras seguidas.

/* 
OBJETIVO 1 - Quando o usuário clicar no botão de 'veja o trailer', devemos abrir a modal com o vídeo do trailer.
    1 - Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
    2 - Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão.
    3 - Passo 3 - Dar um jeito de pegar o elemento da modal no js.
    4 - Passo 4 - Abrir a modal na tela.

OBJETIVO 2 - Quando o usuário clicar no 'X' devemos fechar a modal.
    1 - Passo 1 - Dar um jeito de pegar o elemento de fechar modal usando o JS.
    2 - Passo 2 - Dar um jeito de identificar quando o usuário clicar no 'X'.
    3 - Passo 3 - Fechar a modal.
    
*/

console.log('mostrar o document', document);
//1 - Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
console.log(document.querySelector('.botao-trailer'));
//variáveis: var, let e/ou const. A variável const é utilizada para algo que é constante (ou seja, não muda). 
//Para nomes de variáveis utilizar o conceito de camelcase (ex: botaoTrailer).
const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
// '=' é utilizado para atribuir um valor para uma variável. Atribuir um valor significa armazenar uma informação.

// 2 - Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", ()=> {
    console.log("clicou no botão veja o trailer");
    // passo 4.
modal.classList.add("aberto")
video.setAttribute("src", linkDoVideo);
});
//addEventListener é um método utilizado como uma escuta no botão para avisar quando ele é clicado, dessa forma uma ação é executada.

// 3 - Passo 3 - Dar um jeito de pegar o elemento da modal no js.

// 4 - Passo 4 - Abrir a modal na tela. Temos que voltar no passo 2 para fazer isso, pois vai abrir quando clicar e o passo 2 é o clique. No HTML se colocarmos "modal aberto" ele também abre o vídeo de trailer, porém fica somente aberto ou fechado, com o JS conseguimos fazer com que abra somente quando for clicado.

// OBJETIVO 2 - Quando o usuário clicar no 'X' devemos fechar a modal.
    // 1 - Passo 1 - Dar um jeito de pegar o elemento de fechar modal usando o JS.
const botaoFecharModal = document.querySelector(".fechar-modal");
    // 2 - Passo 2 - Dar um jeito de identificar quando o usuário clicar no 'X'.
botaoFecharModal.addEventListener("click", () => {
    //3 - Passo 3 - Fechar a modal.
modal.classList.remove("aberto");
video.setAttribute("src", "");
//'Remove' nesse caso foi utilizado para fechar a modal, removendo assim o conceito 'aberto'.
});
//Passo 5* - Parar o vídeo quando clicar no 'X'.




