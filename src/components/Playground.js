/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, {useState} from "react";
function Playground (props) {
  const [count, setCount] = useState(0);
  const [spinerOn, setSpinerOn] = useState(false);
  const [weapon, setWeapon] = useState('Scissors');

  if (spinerOn) {
    return (
      <div>
        <h3>The spinner is {spinerOn ? 'On' : 'Off'}</h3>
        <button onClick = {() => setSpinerOn(!spinerOn)}>Turn Spinner Off</button>
      </div>
    )
  }
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h3>The spinner is {spinerOn ? 'On' : 'Off'}</h3>
      <button onClick = {() => setSpinerOn(!spinerOn)}>Toggle Spinner</button>
      <p>The current weapon is: {weapon}</p>
      <button onClick = {() => setWeapon('Scissors')}>Select Scissors</button>
      <button onClick = {() => setWeapon('Rock')}>Select Rock</button>
      <button onClick = {() => setWeapon('Paper')}>Select Paper</button>
    </div>
  )
}
export default Playground;