class AlunosView extends View<Alunos>{

   
    template(model: Alunos): string {
 
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th style="width: 200px;">MATRICULA</th>
                        <th style="width: 200px;">NOME</th>
                        <th style="width: 200px;">DATA NASCIMENTO</th>
                        <th style="width: 200px;">CIDADE</th>
                    </tr>
                </thead>
    
                <tbody>
                ${model.retornaArray().map(aluno =>
                    `<tr>
                        <td>${aluno.matricula}</td>
                        <td>${aluno.nome}</td>
                        <td>${aluno.data.getUTCDate()}/${aluno.data.getUTCMonth() + 1}/${aluno.data.getFullYear()}</td>
                        <td>${aluno.sexo}</td>
                    </tr>                        
                    `).join('')} 


                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `
    }



}