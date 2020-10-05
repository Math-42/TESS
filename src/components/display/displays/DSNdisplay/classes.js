class Correct {
    constructor() {
        window.configAntenas = 1;
    }
}
class NotRedundant {
    constructor() {
        window.configAntenas = 0;
    }
}
class Wrong {
    constructor() {
        window.configAntenas = -1;
    }
}

module.exports = {
    Correct,
    NotRedundant,
    Wrong
}