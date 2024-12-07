import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
import "./components/Netflix.module.css";
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropogation } from "./components/EventPropogation";
import { State } from "./components/hooks/State";
import { DerivedState } from "./components/DerivedState";
import { LiftStateUp } from "./components/LiftStateUp";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";
import ShortCircuitExample from "./components/ShortCircuit";

export const App = () => {
  // return (
    // <section className="container">
      {/* <h1 className="card-heading"> List of Best Netflix Series </h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropogation /> */}
      {/* <State /> */}
      {/* <SiblingComponent /> */}
      {/* <DerivedState /> */}
      {/* <LiftStateUp /> */}
      {/* <ToggleSwitch /> */}
    {/* </section> */}
  // );
  return <section> { <Todo /> } </section>
}


// export function SiblingComponent() {
//   console.log("Sibling Component rendered");
//   return (
//       <div className="main-div">
//           <h2> Sibling Component </h2>
//       </div>
//   )
// }


//? Each JSX expression must have one parent element, which means if you try to return multiple elements, React will throw an error.

//? Every JSX tag needs to be closed. You can use the self-closing tags for elements that dont have children, eg., <img src='url' />