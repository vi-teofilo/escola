class AlunoController{
    // Essa classe tem atributos que são reponsaveis por recevber informações da tela 
    
    private _inputMatricula: JQuery;
    private _inputNome: JQuery; 
    private _inputData: JQuery;
    private _inputSexo: JQuery;
    private _inputRg: JQuery;
    private _inputCpf: JQuery;
    private _inputEndereco: JQuery;
    private _inputNumero: JQuery;
    private _inputComplemento: JQuery;
    private _inputCidade: JQuery;
    private _inputEstado: JQuery;
    // = new |já cria um a instancia 
    private _alunos = new Alunos();
    //passar informações usasse aspas simples
    private _alunosView = new AlunosView('#alunosView');
    // Mensagem
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        // a # declara o ID 
        // Input Element 
        // Capturando o objeto na tela
        this._inputMatricula = $('#matricula');
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputSexo = $('#sexo');
        this._inputRg = $('#rg');
        this._inputCpf = $('#cpf');
        this._inputEndereco = $('#endereco');
        this._inputNumero = $('#numero');
        this._inputComplemento = $('#complemento');
        this._inputCidade = $('#cidade');
        this._inputEstado = $('#estado');


        this._alunosView.update(this._alunos);

    }

    adiciona(event: Event){

        event.preventDefault();

        try {
            const aluno = new Aluno(this._inputMatricula.val(),
            this._inputNome.val(),
            new Date(this._inputData.val().replace(/-/g, '-')),
            this._inputSexo.val(),
            this._inputRg.val(),this._inputCpf.val(),this._inputEndereco.val(),parseInt(this._inputNumero.val()),this._inputComplemento.val(),this._inputCidade.val(),this._inputEstado.val());
            
            this._alunos.adiciona(aluno);
    
            this._alunosView.update(this._alunos);

    
            this._mensagemView.update('Aluno adicionado com sucesso!');
        } catch (error) {
            this._mensagemView.update('Erro ao inserir aluno!'); 
        } 
    }

   
    


}