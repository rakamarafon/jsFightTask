// create async function fight
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

export default async function fight(fighter, improvedFighter, ...point){

    let rand = point.length;
    let isFight = true;    
     while(isFight){
        if(rand <= 0)rand = Math.floor(Math.random() * point.length);
        rand        
        if(fighter.health <= 0){
            await fighter.knockout()
                .then(()=> {isFight = false;})
                .catch(error=>{});
        }

        if(improvedFighter.health <= 0){
                await fighter.knockout()
                .then(()=> {isFight = false;})
                .catch(error=>{});
        }
        let ptn = point[rand];
        fighter.hit(improvedFighter, ptn);
        improvedFighter.doubleHit(fighter, ptn);

    }

}