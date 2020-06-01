class Alunos {
    constructor() {
        this._alunos = [];
    }
    adiciona(aluno) {
        this._alunos.push(aluno);
    }
    retornaArray() {
        return [].concat(this._alunos);
    }
}
