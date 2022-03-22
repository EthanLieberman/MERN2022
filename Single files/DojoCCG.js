class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res -= 1;
        console.log(`${this.name} attacked ${target.name}, reducing its resilience by 1`)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
    super(name, cost)
    
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;

    }


    play(target){
        if (target instanceof Unit){
            target[this.stat] += this.magnitude;

        }
        else{
            throw new Error("no")
        }
    }


}





const red = new Unit("Red Belt Ninja", 3, 3, 4)
const black = new Unit("Black Belt Ninja", 4, 5, 4)

const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resiience by 3", "res", 3)
const Unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2)
const PairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

console.log(red)
console.log("********")

HardAlgo.play(red)
console.log("********")

console.log(red)
console.log("********")

Unhandled.play(red)
console.log("********")

PairProg.play(red)
console.log("********")


console.log(black)
console.log("********")

red.attack(black)
console.log(black)