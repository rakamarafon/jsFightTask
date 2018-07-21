// create async function fight
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

export default async function fight(fighter, improvedFighter, ...point){

    let count = point.length;
    let isFight = true;    
     while(isFight){
        if(count <= 0)count = point.length;
        count        
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
        let ptn = point[count];
        fighter.hit(improvedFighter, ptn);
        improvedFighter.doubleHit(fighter, ptn);

    }

}