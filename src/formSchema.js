import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(2, "The name must be at least 2 characters long"),
  pizzaSize: yup
    .string()
    .required("Choose a Size"),
  sauce: yup
    .string()
    .required("Choose a Sauce"),
  pepperoni: yup.boolean(true),
  sausage: yup.boolean(true),
  canadianBacon: yup.boolean(true),
  spicyItalian: yup.boolean(true),
  grilledChicken: yup.boolean(true),
  onions: yup.boolean(true),
  greenPepper: yup.boolean(true),
  dicedTomatoes: yup.boolean(true),
  blackOlives: yup.boolean(true),
  roastedGarlic: yup.boolean(true),
  artichokeHearts: yup.boolean(true),
  threeCheese: yup.boolean(true),
  pineapple: yup.boolean(true),
  extraCheese: yup.boolean(true),
  gfCrust: yup.boolean(true),
  special: yup.string()
});