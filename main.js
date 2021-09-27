var imagensFilmes=[]
var titulosFilmes=[]
listarFilmes()

function cadastrar(){
  var imagemURL = document.getElementById("imagem").value
  var titulo = document.getElementById("titulo").value
  
  if(imagemURL.endsWith('.jpg')|| imagemURL.endsWith('.png')){
    if(titulo==''){
      alert("Insira um título") 
    }else if(titulosFilmes.includes(titulo)){
      alert("Esse filme já foi adicionado")
    }else{
      imagensFilmes.push(imagemURL)
      titulosFilmes.push(titulo)
      alert("Filme cadastrado com sucesso")
      listarFilmes()
    }
  }else{
    alert("Endereço de imagem inválido")
  }
  document.getElementById("imagem").value =""
  document.getElementById("titulo").value =""
  fecharPopUp()
}

function listarFilmes(item){
  var principal = document.getElementById("principal")
  
  principal.innerHTML=''
  for(var i=0;i<titulosFilmes.length;i++){
    principal.innerHTML+= '<div class="card"><span id="excluir" onclick="removerFilme('+i+')">X</span><span id="editar" onclick="editarFilme('+i+')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg></span><img src='+imagensFilmes[i]+'><h2>'+titulosFilmes[i]+'</h2></div>'
  }
}

function removerFilme(i){
    var certeza = confirm("Tem certeza que quer excluir esse filme?")
    if(certeza){
      titulosFilmes.splice(i,1)
      imagensFilmes.splice(i,1)
      listarFilmes()
    }
}

function editarFilme(i){
  var imagemNovo = prompt("Qual a URL da imagem do Filme?")
  var nomeNovo = prompt("Qual o nome do Filme?")
  
  if(imagemNovo !== null && imagemNovo.endsWith('.jpg')|| imagemNovo.endsWith('.png')){
      alert("Imagem atualizada com sucesso!")
      imagensFilmes.splice(i,1,imagemNovo)
    }else{
     alert("Endereço de imagem inválido")
    }
  if(nomeNovo === null || nomeNovo =="" || titulosFilmes.includes(nomeNovo)){
    alert("Esse título já foi adicionado ou o nome é inválido")
  }else{
    alert("Título atualizado com sucesso")
    titulosFilmes.splice(i,1,nomeNovo) 
  }
  listarFilmes()
}


var janela = document.getElementById("cadastro")

function abrirPopUp() {
  janela.style.display = "block"
}

function fecharPopUp() {
  janela.style.display = "none"
}

function avancarSlide(){
  console.log("avancou")
  var principal = document.getElementById("principal")
  principal.scrollBy(300,0)
}
function voltarSlide(){
  console.log("voltou")
  principal.scrollBy(-300,0)
}
