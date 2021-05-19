var minhaVar = "minha variavel";
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 ou es 2015 | Site: es6-features.org
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function () {
    return valor * 2;
});
// ES 2015 
numeros.map(function (valor) { return valor * 2; });
// Utilizando o BABEL
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'sdfg';
n1 = 4;
// Tipagem de variaveis e decorators
