    class Aluno {
        constructor(private _matricula:string, 
            private _nome: string,
            private _data: Date, 
            private _sexo: string, 
            private _rg: string,
            private _cpf: string,
            private _endereco: string,
            private _numero: number,
            private _complemento: string,
            private _cidade: string,
            private _estado: string,
            
            ){ }

        get matricula(){
            return this._matricula;
        }  
        
        get nome(){
            return this._nome;
        }    

        get data(){
            return this._data;
        }

        get sexo(){
            return this._sexo;
        }
        
        get rg(){
            return this._rg;
        }
        get cpf(){
            return this._cpf;
        }
        get endereco(){
            return this._endereco;
        }   
        
        get numero(){
            return this._numero;
        }   
        
        get complemento(){
            return this._complemento;
        }  

        get cidade(){
            return this._cidade;
        }
        get estado(){
            return this._estado;
        }
    }