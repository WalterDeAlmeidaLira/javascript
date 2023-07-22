var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes sem construtor - uso da exclamação
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());
var vilson = new Usuario();
vilson.nome = 'vilson';
console.log(vilson);
// classes com construtor
var NovoUsusario = /** @class */ (function () {
    function NovoUsusario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return NovoUsusario;
}());
var jose = new NovoUsusario('josé', 40);
console.log(jose);
//readonly em propriedades da classe
var Carro = /** @class */ (function () {
    function Carro(nome) {
        this.rodas = 4;
        this.nome = nome;
    }
    return Carro;
}());
var fusca = new Carro('fusca');
//fusca.rodas = 10
//herança e super 
var Personagem = /** @class */ (function () {
    function Personagem(nome, idade, forca) {
        this.nome = nome;
        this.idade = idade;
        this.forca = forca;
    }
    return Personagem;
}());
var SuperPersonagem = /** @class */ (function (_super) {
    __extends(SuperPersonagem, _super);
    function SuperPersonagem(nome, idade, forca) {
        var _this = _super.call(this, nome, idade, forca) || this;
        _this.superPoder = _this.forca + 1000;
        return _this;
    }
    return SuperPersonagem;
}(Personagem));
var lutador = new SuperPersonagem('mike', 30, 500);
console.log('poder de luta do mike', lutador.superPoder);
// get set 
var Conta = /** @class */ (function () {
    function Conta(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    Object.defineProperty(Conta.prototype, "setSaldo", {
        set: function (saldo) {
            if (saldo === 0) {
                return;
            }
            this.saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "pegaSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.pagaConta = function (valorConta) {
        if (this.saldo > valorConta) {
            this.saldo -= valorConta;
            return 'valor pago com sucesso';
        }
        return 'você não tem saldo suficiente';
    };
    return Conta;
}());
var conta = new Conta('joao', 2000);
conta.setSaldo = 3000;
console.log('saldo: ', conta.pegaSaldo);
console.log("Pagar conta ".concat(conta.pagaConta(1000)));
console.log("Pagar conta ".concat(conta.pagaConta(4000)));
var Jogador = /** @class */ (function () {
    function Jogador(nome) {
        this.nome = nome;
    }
    Jogador.prototype.exibeNome = function () {
        return "O nome do jogador \u00E9 ".concat(this.nome);
    };
    return Jogador;
}());
var jg1 = new Jogador('fulano');
console.log(jg1.exibeNome());
// override 
var base = /** @class */ (function () {
    function base() {
    }
    base.prototype.metodoTeste = function () {
        console.log("exibe método da classe base");
    };
    return base;
}());
var topo = /** @class */ (function (_super) {
    __extends(topo, _super);
    function topo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    topo.prototype.metodoTeste = function () {
        var a = 10;
        var b = 15;
        console.log("estou sobrescrevendo um m\u00E9todo. ;) ".concat(a + b));
    };
    return topo;
}(base));
var testeSobrescrita = new topo();
var testeSobrescrita2 = new base();
testeSobrescrita2.metodoTeste();
testeSobrescrita.metodoTeste();
//VISIBILIDADE EM CLASSES
// PUBLIC - É A VISIBILIDADE DEFAULT E PODE SER ACESSADO POR TODOS 
//PROTECTED - ACESSÍVEL SOMENTE AS CLASSES FILHAS, AS PROPRIODADES SO PODEM SER ACESSADAS ATRAVÉS DE MÉTODOS
//PRIVATE - SOMENTE A CLASSE PODE ACESSAR
// PROTECTED
var A = /** @class */ (function () {
    function A() {
        this.nomeClasse = 'A';
    }
    A.prototype.mostraNome = function () {
        return "m\u00E9todo protegido";
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.nome = function () {
        console.log("nome da classe pai \u00E9 ".concat(this.nomeClasse));
        console.log(this.mostraNome());
    };
    return B;
}(A));
var bTeste = new B();
bTeste.nome();
// private
var ClassePrivada = /** @class */ (function () {
    function ClassePrivada() {
        this.nome = 'private';
    }
    ClassePrivada.prototype.exibirNome = function () {
        return "nome da class \u00E9 ".concat(this.nome);
    };
    return ClassePrivada;
}());
var nC = new ClassePrivada();
console.log(nC.exibirNome());
//static - permite acessar propriedades e métodos sem instanciar objetos
var Estatico = /** @class */ (function () {
    function Estatico() {
    }
    Estatico.somador = function (a, b) {
        return a + b;
    };
    Estatico.nome = 'estático';
    return Estatico;
}());
console.log(Estatico.somador(1, 2));
console.log(Estatico.nome);
// classes com generic
var item = /** @class */ (function () {
    function item(primeiro, segundo) {
        this.primeiro = primeiro;
        this.segundo = segundo;
    }
    Object.defineProperty(item.prototype, "exibir", {
        get: function () {
            return "".concat(this.primeiro, " + ").concat(this.segundo);
        },
        enumerable: false,
        configurable: true
    });
    return item;
}());
var novoItem = new item('teste', 10);
console.log(novoItem.exibir);
