class Correct {
    constructor(){
        console.log('correto')
    }
}
class NotRedundant {
    constructor(){
        console.log('nao redundante')
    }
}
class Wrong {
    constructor(){
        console.log('errado')
    }
}
module.exports = {Correct, NotRedundant, Wrong}