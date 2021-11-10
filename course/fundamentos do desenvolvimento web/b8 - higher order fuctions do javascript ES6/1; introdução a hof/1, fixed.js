function wakeUp() {return 'Acordado!'};
function coffee() {return 'Bora tomar café!'};
function sleep() {return 'Partiu dormir!'};
function doingThings(func) {console.log(func());};

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);

