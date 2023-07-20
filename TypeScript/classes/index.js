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
