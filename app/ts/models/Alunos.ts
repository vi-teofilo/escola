class Alunos{
                        // uma Array de Negociacao, pegando o objeto 
    private _alunos: Aluno[] = [];


    adiciona(aluno: Aluno){
        // Push-Responsavel por armazenar o vetor 
        this._alunos.push(aluno);

    }
    // TS não verifica metodo e sim atributos.
    //tipamos o metodo como Array. 
    retornaArray(): Aluno[] {
        
        return [].concat(this._alunos);
    }

}