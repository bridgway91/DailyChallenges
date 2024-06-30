// Challenge
// Learn about nesting and listing React components.
// - The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
// - Loop through the props.eggs to output a unorder list of Easter eggs.
// - Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
// - Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.


import React from 'react'; // so i dont know React, and this wasnt very beginner-friendly, but will try and take what i can from it (soln 100% stolen from previous submissions)
export const EggList = ({eggs}) => {
  const eggsMap = eggs.map((egg,ind) => <EasterEgg key={ind} name={egg}/>)
  return <ul>{eggsMap}</ul>
}
export const EasterEgg = ({name}) => {
  return <li>{name}</li>
}
// property of function in curly braces
// output is a list/array, can just be thrown in curly braces
    // loop done just as a map since already stated prop is an array
    // unique key is just index (not ideal apparently)