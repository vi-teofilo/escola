class Aluno {
    constructor(_matricula, _nome, _data, _sexo, _rg, _cpf, _endereco, _numero, _complemento, _cidade, _estado) {
        this._matricula = _matricula;
        this._nome = _nome;
        this._data = _data;
        this._sexo = _sexo;
        this._rg = _rg;
        this._cpf = _cpf;
        this._endereco = _endereco;
        this._numero = _numero;
        this._complemento = _complemento;
        this._cidade = _cidade;
        this._estado = _estado;
    }
    get matricula() {
        return this._matricula;
    }
    get nome() {
        return this._nome;
    }
    get data() {
        return this._data;
    }
    get sexo() {
        return this._sexo;
    }
    get rg() {
        return this._rg;
    }
    get cpf() {
        return this._cpf;
    }
    get endereco() {
        return this._endereco;
    }
    get numero() {
        return this._numero;
    }
    get complemento() {
        return this._complemento;
    }
    get cidade() {
        return this._cidade;
    }
    get estado() {
        return this._estado;
    }
}
