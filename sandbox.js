

class Character {
    constructor(name, gender, race, hp = 100, ac = 10){
        this.name = name
        this.gender = gender
        this.race = race
        this.hp = hp
        this.ac = ac
        this.xp = 0
        this.inventory = ['rope', 'apple', 'simple clothes']
    }

    attack(){
        return 25
    }

    addItem(items){
        if(Array.isArray(items)){
            items.forEach(i => this.inventory.push(i))
        } else {
            this.inventory.push(items)
        }
    }

    removeItem(item){
        const itemIndex = this.inventory.findIndex(invItem => invItem === item)
        this.inventory.splice(itemIndex, 1)
    }
}

// Character Classes

class Rogue extends Character {
    constructor(name, gender, race){
        super(name, gender, race, 110, 13)
        super.addItem('dagger','Leather Armor')
    }
}

class Wizard extends Character {
    constructor(name, gender, race){
        super(name, gender, race, 80, 10)
        super.addItem('Spell-book','Staff')
    }
}

class Barbarian extends Character {
    constructor(name, gender, race){
        super(name, gender, race, 140, 13)
        super.addItem('Club','Fur Armor')
    }
}

class Paladin extends Character {
    constructor(name, gender, race){
        super(name, gender, race, 120, 16)
        super.addItem('Sword','Steel Armor')
    }
}


//Characters generated

const genericChar = new Character('Bob','male','human')
const timothy = new Rogue('Timothy','male','Half-ELf')
const alfred = new Wizard('Alfred','male','Gnome')
const kaya = new Barbarian('Kaya','female','Dwarf')
const silverheart = new Paladin('Silverheart','female','Elf')


