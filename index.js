
class heroi{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar (){

        let ataque = ""

        switch (true){
            case this.tipo == "mago":
            ataque = "magia"
            break

            case this.tipo == "guerreio":
            ataque = "espada"
            break

            case this.tipo == "monge":
            ataque = "artes marciais"
            break

            case this.tipo == "ninja":
            ataque = "shuriken"
            break
        }
        
        console.log(`o ${this.tipo} atacou usando ${ataque}`) 

    }

 }

let heroi1 = new heroi ("Felipe", 29, "mago")
let heroi2 = new heroi ("Felipe", 29, "guerreiro")
let heroi3 = new heroi ("Felipe", 29, "monge")
let heroi4 = new heroi ("Felipe", 29, "ninja")

//saida

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()




