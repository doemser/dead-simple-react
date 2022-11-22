export default function App() {
  return (
    <>
      {/* ////// STEP 1 - PASSING PROPS ////// */}
      {/* This is a Component. We are passing 7 props to this component*/}
      <AnyComponent
        thisIsAProp="this is a string behind a prop"
        youCan="name props as you want"
        makeThem={["arrays!", "cause they are cool", "if you want", "to map"]}
        aBool={true}
        aNumber={2674}
        orAnObject={{ dominik: "Hautau", neuefische: true, coolness: 9.2578 }}
        evenFunctions={() => {
          console.log("Wow, this function is passed within a prop");
        }}
      />
    </>
  );
}

/*
  ////// STEP 2 - OBJECT UNDER THE HOOD ////// 
  All Props we passed to the component will be stored in an Object 
  Because this Object stores all of our props, we are calling it: "props"

  The props Object looks like this:
*/

const howPropsLook = {
  thisIsAProp: "this is a string behind a prop",
  youCan: "name props as you want",
  makeThem: ["arrays!", "cause they are cool", "if you want", "to map"],
  aBool: true,
  aNumber: 2674,
  orAnObject: { dominik: "Hautau", neuefische: true, coolness: 9.2578 },
  evenFunctions: () => {
    console.log("Wow, this function is passed within a prop");
  }
};
// NOTE: This is not the actual props Object, this is just how it looks like

/*
  ////// STEP 2.1 - ADDRESSING KEYS IN OBJECTS - SIDEFACT ////// 
  We can address every key in an Object like this:
*/

const keyInObject = howPropsLook.thisIsAProp;

console.log("////// STEP 2.1 //////", keyInObject);

/*
  ////// STEP 2.2 - OBJECT DESTRUCTURING - SIDEFACT ////// 
  In an Object, we can grap every key and its value by destructuring it.
  Then we can use its keys outside as variables for the values.
  We can change the order of the keys, but we cannot rename them without writing them out once.
*/

const { aNumber, orAnObject, aBool, youCan } = howPropsLook;

console.log("////// STEP 2.2 //////");
console.log("a number:", aNumber);
console.log("a bool:", aBool);
console.log("an object:", orAnObject);
console.log("a string:", youCan);

/*
  ////// STEP 3 - RECEIVING PROPS////// 
  Our Component function receives the props Object within the round braces
  like this:

  function AnyComponent( props ) {
    return <></>
  }

  then we are destructuring it on the spot:

  function AnyComponent({ key1, key2, key3 }) {
    return <></>
  }
*/

function AnyComponent({
  thisIsAProp,
  aNumber,
  evenFunctions,
  makeThem,
  orAnObject
}) {
  /*
  ////// STEP 4 - USING PROPS ////// 
  We use our props by interpolating into the JSX return.

  We already know how to interpolate into ES6 Strings.
  An ES6 String is a string using backticks: `` 
  In an ES6 String this is an interpolation: ${}
  */

  console.log(
    "////// STEP 4 //////",
    `Interpolated the number ${aNumber} into this ES6 String`
  );

  /*
  Now we are interpolating within the JSX return.
  In JSX this is the syntax for an interpolation: {}
*/
  return (
    <>
      <h1>Understanding Props</h1>

      <p>The string we have passed: {thisIsAProp}</p>

      <hr />

      <ul>
        The array we have passed
        {makeThem.map((DataOfEachIndexOfArray, index) => {
          /* Never use the index as key for mapped elements ;) */
          return <li key={index}>{DataOfEachIndexOfArray}</li>;
        })}
      </ul>

      <hr />

      <p>Number we passed divided by 2: {aNumber / 2}</p>

      <hr />

      <p>
        {aBool
          ? "The bool we passed seems true"
          : "nah, a bool that is false was passed"}
      </p>

      <hr />

      <button onClick={evenFunctions}>
        Even functions as a prop are possible
      </button>

      <hr />

      <h4>The object we passed held data about the person who wrote this:</h4>
      <p>Dominik {orAnObject.dominik}</p>
      <p>
        {orAnObject.neuefische
          ? "working at neuefische"
          : "working somewhere else"}
      </p>
      <p>Coolness: {orAnObject.coolness}/10</p>
    </>
  );
}
