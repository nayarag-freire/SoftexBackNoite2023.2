// const objetoVazio = {};

// const pessoa = {}; // Cria o objeto vazio

//  pessoa.nome = "João"; //Adiciona a propriedade "nome" com o valor "João" Agora o objeto "pessoa" terá a propriedade "nome" com o valor "João".

//const usuario = {
   //idade: 25 // Exemplo de propriedade "idade" com um valor
 //};
 
 //const idadeDoUsuario = usuario.idade; // Acessa o valor da propriedade "idade"
 
 // Agora a variável idadeDoUsuario contém o valor da propriedade "idade" do objeto "usuario" Nesse exemplo, idadeDoUsuario conterá o valor 25, que é o valor da propriedade "idade" no objeto "usuario".

//  const produto = {
//    preco: 50
//  };
//  produto.preco = 75;
 
//  console.log("o Valor do produto é 75")

// const contato = {
//    nome: "Fulano",
//    email: "fulano@example.com",
//    telefone: "123456789"
//  };
 
//  delete contato.email; //Remove a propriedade "email" do objeto "contato"

//  console.log(contato)


// const cliente = {
//    nome: "Cliente Exemplo",
//    idade: 30
//  };
 
//  cliente.endereco = "Rua A, 123"
//  console.log(cliente)

// const empresa = {
//    departamentos: [
//      { nome: "Recursos Humanos" },
//      { nome: "Marketing" },
//      { nome: "Vendas" }
//    ]
//  };
 
//  const primeiroDepartamento = empresa.departamentos[0].nome; // A variável "primeiroDepartamento" agora contém o nome do primeiro departamento ("Recursos Humanos")

//  //Nesse exemplo, empresa.departamentos[0] acessa o primeiro objeto do array de departamentos, e .nome então recupera o valor da propriedade "nome" desse objeto, que é o nome do primeiro departamento.


// const aluno = {
// notas: [85, 90, 78]
 
// };
 
// aluno.notas[1] = 95
// console.log(aluno)


// const dados = {
//    valores: [10, 20, 30]
//  };
 
//  dados.valores.splice(1, 1);

//  console.log(dados)

// const livro = {
//    titulo: "Livro",
//    autor: "Maria"
//  };
//  console.log(livro)


// const diasDaSemana = {
//    SUNDAY: "DOmingo",
//    MONDAY: "Segunda",
//    TUESDAY: "Terça",
//    WEDNESDAY: "Quarta",
//    THURSDAY: "Quinta",
//    FRIDAY: "Sexta",
//    SATURDAY: "Sábado"
//  };
//  console.log(diasDaSemana.FRIDAY)

// Definindo um "enum" para tipos de inimigos
const EnemyTypes = {
   GOBLIN: "Goblin",
   ORC: "Orc",
   DRAGON: "Dragon",
   WITCH: "Witch"
 };
 
//  // Criando inimigos usando os tipos definidos
//  class Enemy {
//    constructor(type) {
//      this.type = type;
//      // Outras propriedades e métodos do inimigo...
//    }
//  }
 
//  const goblin = new Enemy(EnemyTypes.GOBLIN);
//  const orc = new Enemy(EnemyTypes.ORC);
//  const dragon = new Enemy(EnemyTypes.DRAGON);
 
//  console.log(goblin.type); // Saída: "Goblin"
//  console.log(orc.type);    // Saída: "Orc"
//  console.log(dragon.type); // Saída: "Dragon

// const ClasseDePassagem = {
//    ECONOMICA: 'Econômica',
//    EXECUTIVA: 'Executiva',
//    PRIMEIRA_CLASSE: 'Primeira Classe'
//  };
// // Exemplo de uso
// const tipoDeClasse = ClasseDePassagem.EXECUTIVA;
// console.log(`Tipo de classe selecionado: ${tipoDeClasse}`); 


public enum CategoriaTarefa {
   TRABALHO,
   ESTUDO,
   LAZER
}
private String descricao;
    private CategoriaTarefa categoria;

    public Tarefa(String descricao, CategoriaTarefa categoria) {
        this.descricao = descricao;
        this.categoria = categoria;
    }

    // Getters e setters