import React, {useState} from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

/// -------------------- Begin Exercise Code -------------------- ///
/// Code in this block (ended by the similar comment several lines below),
/// are relevant to the excerise. You can ignore all other code

interface AppProps {}
const initialToppings = {
  all: false,
  pepperoni: false,
  spinach: false,
  basil: false,
  pineapple: false,
  bacon: false
}
const App: React.FC<AppProps> = () => {
  const [toppings, setToppings] = useState(initialToppings)

  const favToppings: string[] = []

  toppings.pepperoni ? favToppings.push("Pepperoni") : favToppings.filter(item => item !== "Pepperoni")
  toppings.spinach ? favToppings.push("Spinach") : favToppings.filter(item => item !== "Spinach")
  toppings.basil ? favToppings.push("Basil") : favToppings.filter(item => item !== "Basil")
  toppings.pineapple ? favToppings.push("Pineapple") : favToppings.filter(item => item !== "Pineapple")
  toppings.bacon ? favToppings.push("Bacon") : favToppings.filter(item => item !== "Bacon")

  if(toppings.pepperoni !== true || toppings.spinach !== true || toppings.basil !== true || toppings.pineapple !== true || toppings.bacon !== true){
    toppings.all = false
  } else {
    toppings.all = true
  }
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "all"){
      setToppings({
        ...toppings,
        all: e.target.checked,
        pepperoni: e.target.checked,
        spinach: e.target.checked,
        basil: e.target.checked,
        pineapple: e.target.checked,
        bacon: e.target.checked,
      })
    }
    else {
      setToppings({
      ...toppings,
      [e.target.name]: e.target.checked
      }
    )
  }}
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h3>What are your favorite pizza topings?</h3>
        <div style={{ paddingBottom: 10 }}>
          <label htmlFor="all">Select all</label>
          <input type="checkbox" name="all" value="all" checked = {toppings.all} onChange={handleCheckBoxChange}/>
        </div>
        <div>
          <label htmlFor="Pepperoni">Pepperoni</label>
          <input type="checkbox" name="pepperoni"  value="Pepperoni" checked = {toppings.pepperoni} onChange={handleCheckBoxChange}/>
        </div>
        <div>
          <label htmlFor="Spinach">Spinach</label>
          <input type="checkbox" name="spinach" value="Spinach" checked = {toppings.spinach} onChange={handleCheckBoxChange}/>
        </div>
        <div>
          <label htmlFor="Basil">Basil</label>
          <input type="checkbox" name="basil" value="Basil" checked = {toppings.basil} onChange={handleCheckBoxChange}/>
        </div>
        <div>
          <label htmlFor="Pineapple">Pineapple</label>
          <input type="checkbox" name="pineapple" value="Pineapple" checked = {toppings.pineapple} onChange={handleCheckBoxChange} />
        </div>
        <div>
          <label htmlFor="Bacon">Bacon</label>
          <input type="checkbox" name="bacon" value="Bacon" checked = {toppings.bacon} onChange={handleCheckBoxChange}/>
        </div>
      </div>
      <div>
        <h3>Your favorite pizza toppings are:</h3>
        <div>
          {
            favToppings.map(topping => {
              return (
                <h3 key={topping}>{topping}</h3>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
/// -------------------- End Exercise Code -------------------- ///

interface StateUpdateProps {}

const StateUpdate: React.FC<StateUpdateProps> = () => {
  return (
    <Grid container direction="column">
      <Paper style={{ padding: 25, marginBottom: 75 }}>
        <Typography variant="h3" align="center">
          State Update
        </Typography>
        <Typography paragraph component="div">
          This exercise is to add new logic that doesn't current exist to
          achieve the app's goal. In other words, UI of the app exists but it is
          missing any important business logic that adds functionality to the
          app. The task is to add that business logic!
        </Typography>
        <Typography paragraph component="div">
          The goal of the app is to:
          <ul>
            <li>
              <b>Update the UI:</b> when a user selects a pizza topping, it
              should be added to the "Your favorite pizza toppings are:" list.
              That list really doesn't exist yet, so it can be created in any
              form. In other words, checking a checkbox should add the value of
              that checkbox to that `div`.
            </li>
            <li>
              <b>Select all:</b> There is one special checkbox: the "Select all"
              checkbox. When this checkbox is checked, it should check all other
              checkboxes and subsequently add them all to the favorite toppings
              list. <b>Additionally,</b> if any checkboxes are unchecked, the
              "Select all" box cannot be checked.
            </li>
          </ul>
        </Typography>
      </Paper>
      <App />
    </Grid>
  );
};

export default StateUpdate;
