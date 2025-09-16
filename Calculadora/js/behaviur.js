function agregar(valor) {
    document.getElementById('displaycal').value += valor;
}
function borrar() {
    document.getElementById('displaycal').value = '';
}
function operar(op) {
    document.getElementById('displaycal').value += op;
}
function calcular() {
    let resultado = eval(document.getElementById('displaycal').value);
    document.getElementById('displaycal').value = resultado;
}