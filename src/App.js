import React, { useState, useEffect } from "react";
import schema from "./formSchema";
import * as yup from "yup";
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import "./App.css";

const defaultValues = {
  ///// TEXT INPUTS /////
  name: "",
  ///// DROPDOWN /////
  pizzaSize: "",
  ///// RADIO BUTTONS /////
  sauce: "",
  ///// CHECKBOXES /////
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalian: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  gfCrust: false,
  ///// TEXT INPUTS /////
  special: "",
};

const initialFormErrors = {
  name: "",
};

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [savedPizzaInfo, setSavedPizzaInfo] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled);

  const change = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const submit = evt => {
    evt.preventDefault();
    const newPizza = {
      name: formValues.name,
      pizzaSize: formValues.pizzaSize,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadianBacon: formValues.canadianBacon,
      spicyItalian: formValues.spicyItalian,
      grilledChicken: formValues.grilledChicken,
      onions: formValues.onions,
      greenPepper: formValues.greenPepper,
      dicedTomatoes: formValues.dicedTomatoes,
      blackOlives: formValues.blackOlives,
      roastedGarlic: formValues.roastedGarlic,
      artichokeHearts: formValues.artichokeHearts,
      threeCheese: formValues.threeCheese,
      pineapple: formValues.pineapple,
      extraCheese: formValues.extraCheese,
      gfCrust: formValues.gfCrust,
      special: formValues.special.trim()
    }
    setSavedPizzaInfo([ ...savedPizzaInfo, newPizza ])
    setFormValues(defaultValues);
    console.log(newPizza);
  }

  return (
    <div className="App">
      <nav className="nav__bar">
        <h1 className='store__header'>Lambda Eats</h1>
        <div className='nav__links'>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/pizza">Order Now</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form 
            values={formValues}
            change={change}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route> 
        <Route path="/"> 
          <Home /> 
        </Route>
      </Switch>
    </div>
  );
};
export default App;
