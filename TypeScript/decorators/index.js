var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
// exemplo de decorators
function decorators() {
    console.log('iniciando decorator');
    return function (target, propertkey, descriptor) {
        console.log('executando o decorator');
        console.log(target);
        console.log(propertkey);
        console.log(descriptor);
        console.log('fim do decorator');
    };
}
var TesteDecorators = /** @class */ (function () {
    function TesteDecorators(nome) {
        this.nome = nome;
    }
    //@decorators()
    TesteDecorators.prototype.exibirNome = function () {
        return "o nome \u00E9 ".concat(this.nome);
    };
    return TesteDecorators;
}());
var obj = new TesteDecorators('joão');
console.log(obj.exibirNome());
//decorators para classes
function decClass(constructor) {
    //console.log(constructor);
    if (constructor.name === 'Usuario') {
        console.log('criando usuário');
    }
}
var Usuario = function () {
    var _classDecorators = [decClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Usuario = _classThis = /** @class */ (function () {
        function Usuario_1(nome) {
            this.nome = nome;
            this.nome = nome;
        }
        Object.defineProperty(Usuario_1.prototype, "exibirNome", {
            get: function () {
                return console.log(this.nome);
            },
            enumerable: false,
            configurable: true
        });
        return Usuario_1;
    }());
    __setFunctionName(_classThis, "Usuario");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Usuario = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Usuario = _classThis;
}();
var user = new Usuario('leandro');
