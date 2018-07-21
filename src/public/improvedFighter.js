// Create class ImprovedFighter
import Fighter from "./fighter";

export class ImprovedFighter extends Fighter{
    constructor(name, power, health){
        super(name, power, health);
    }

    dooubleHit(enemy, point){
        super.hit(enemy, point * 2);
    }
}