// A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey);


for (let key in this) { // fuck these stupid puzzle problems, no clue how the hell I was supposed to just know this
  let wire
  if (typeof this[key] === 'function' && this[key].name === 'CutTheWire') {
    wire = key;
    CutTheWire(this[wire]);
  }
}