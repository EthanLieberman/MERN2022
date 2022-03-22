class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayname(){
        console.log(this.name)
    }

    showStats(){
        console.log(this.health, this.speed, this.strength)
    }

    drinkSake(){
        this.health +=10;
    }

}

class Sensei extends Ninja{
    constructor(name, health, wisdom){
        super(name, health)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        console.log(this.wisdom)
    }
}

const ninja1 = new Ninja("Hyabusa",100)
const sensei1 = new Sensei("jake",200)


console.log(sensei1);
sensei1.speakWisdom();

