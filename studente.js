class Studente{

    constructor(nome,cognome,eta,matricola){
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
        this.matricola = matricola
    }

    isMaggiorenne(){
        if (this.eta >= 18){
            return true
        }
        return false
    }

    toString(){
        console.log(`Nome: ${this.nome}, cognome: ${this.cognome}, età: ${this.eta} (maggiorenne=${this.isMaggiorenne()}), matricola: ${this.matricola}`)
    }
}

const studente1 = new Studente("Mario","Rossi",17,1234)
const studente2 = new Studente("Luigi","Verdi",19,4321)

studente1.toString()
studente2.toString()