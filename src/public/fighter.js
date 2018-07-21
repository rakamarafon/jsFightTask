// Create class Fighter
export class Fighter {
    constructor(name, power, healt){
        this.name = name;
        this.power = power;
        this.healt = healt;
    }
    setDamage(damage){
        this.healt = this.healt - damage;
        console.log(`health:${this.healt}`);
    }
    hit(enemy, point){
        enemy.setDamage(point * this.power);
    }

    knokout(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("TIME IS OVER");
                resolve();
            }, 500);
        });
    }
}