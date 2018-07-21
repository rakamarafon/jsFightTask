// create two instances

// call fight function
import Fighter from "./fighter";
import fight from "./fight";
import ImprovedFighter from "./improvedFighter";

let fighter = new Fighter("jan", 100, 20000);
let improvedFighter = new ImprovedFighter("lee", 120, 21000);

fight(fighter, improvedFighter, 100, 120, 140, 200);