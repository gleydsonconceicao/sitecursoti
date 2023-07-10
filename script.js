var valueTable = [];
function btnSalvar(event){
    event.preventDefault();
    var nome = $("#nome").val();
    var email = $("#email").val();
    var curso = $("#curso").val();
    var horario = $("#horario").val();
    
    validacao = validarForm(nome, email, curso, horario);

    if(!validacao){
        alert("Preencher os campos obrigatórios");
        return;
    }
    let lineTable = {nome, email, curso, horario};
    AddElementoHtml(lineTable);
}

function enviarFormulario(event) {
    event.preventDefault();
    return false;
}

function AddElementoHtml(lineTable){
    var elementoHtml = document.getElementById("adicionar-linha");
    var newCodeHtml = `<tr>
    <th scope="row">${lineTable.nome}</th>
    <td>${lineTable.email}</td>
    <td>${lineTable.curso}</td>
    <td>${lineTable.horario}</td>
    <td><button onclick='excluirElemento(this)' class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button></td>
  </tr>`;
  elementoHtml.insertAdjacentHTML("beforeend", newCodeHtml);
}

function excluirElemento(element){
    if(confirm("Deseja Excluir esse elemento")){
        element.parentNode.parentNode.remove();
    }
}

function validarForm(nome, email, curso, horario){
    if(!nome || !email || !curso || horario == 0){
        return false;
    }
    return true;
}