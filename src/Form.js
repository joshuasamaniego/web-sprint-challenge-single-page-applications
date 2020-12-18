import React from 'react'

function Form(props) {
    const { values, submit, change, disabled, errors } = props;
    
    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUSe = type === "checkbox" ? checked : value;
        change(name, valueToUSe);
    };

    return (
        <div>
            <label htmlFor="pizzaBuilder">Build Your Own Pizza
                <form onSubmit={submit}>
                    <div>
                        <label>Name:
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={onChange}
                                className="text__box"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="pizzaSize" className="pizza__size">Choice of Size:  
                            <select name="pizzaSize" value={values.pizzaSize} onChange={onChange}>
                                <option value="">Select A Size</option>
                                <option value="14">14in Pizza</option>
                                <option value="16">16in Pizza</option>
                                <option value="24">24in Pizza</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="pizzaSauce" className="pizza__sauce">Choice of Sauce:
                            <label>
                                Original Red
                                <input
                                    type="radio"
                                    name="sauce"
                                    value="red"
                                    onChange={onChange}
                                    checked={values.sauce === "red"}
                                />
                            </label>
                            <label>
                                Garlic Ranch
                                <input
                                    type="radio"
                                    name="sauce"
                                    value="garlic"
                                    onChange={onChange}
                                    checked={values.sauce === "garlic"}
                                />
                            </label>
                            <label>
                                BBQ Sauce
                                <input
                                    type="radio"
                                    name="sauce"
                                    value="bbq"
                                    onChange={onChange}
                                    checked={values.sauce === "bbq"}
                                />
                            </label>
                            <label>
                                Spinach Alfredo
                                <input
                                    type="radio"
                                    name="sauce"
                                    value="spinach"
                                    onChange={onChange}
                                    checked={values.sauce === "spinach"}
                                />
                            </label>
                        </label>
                    </div>
                    <div>
                        <label>Add Toppings:
                            <label>Pepperoni
                                <input
                                    type="checkbox"
                                    name="pepperoni"
                                    checked={values.pepperoni}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Sausage
                                <input
                                    type="checkbox"
                                    name="sausage"
                                    checked={values.sausage}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Canadian Bacon
                                <input
                                    type="checkbox"
                                    name="canadianBacon"
                                    checked={values.canadianBacon}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Spicy Italian Sausage
                                <input
                                    type="checkbox"
                                    name="spicyItalian"
                                    checked={values.spicyItalian}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Grilled Chicked
                                <input
                                    type="checkbox"
                                    name="grilledChicken"
                                    checked={values.grilledChicken}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Onions
                                <input
                                    type="checkbox"
                                    name="onions"
                                    checked={values.onions}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Green Pepper
                                <input
                                    type="checkbox"
                                    name="greenPepper"
                                    checked={values.greenPepper}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Diced Tomatoes
                                <input
                                    type="checkbox"
                                    name="dicedTomatoes"
                                    checked={values.dicedTomatoes}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Black Olives
                                <input
                                    type="checkbox"
                                    name="blackOlives"
                                    checked={values.blackOlives}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Roasted Garlic
                                <input
                                    type="checkbox"
                                    name="roastedGarlic"
                                    checked={values.roastedGarlic}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Artichoke Hearts
                                <input
                                    type="checkbox"
                                    name="artichokeHearts"
                                    checked={values.artichokeHearts}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Three Cheese
                                <input
                                    type="checkbox"
                                    name="threeCheese"
                                    checked={values.threeCheese}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Pineapple
                                <input
                                    type="checkbox"
                                    name="pineapple"
                                    checked={values.pineapple}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Extra Cheese
                                <input
                                    type="checkbox"
                                    name="extraCheese"
                                    checked={values.extraCheese}
                                    onChange={onChange}
                                />
                            </label>
                        </label>
                    </div>
                    <div>
                        <label>Choice of Substitute:
                            <label>Gluten Free Crust
                                <input
                                    type="checkbox"
                                    name="gfCrust"
                                    checked={values.gfCrust}
                                    onChange={onChange}
                                />
                            </label>
                        </label>
                    </div>
                    <div>
                        <label>Special Instructions:
                            <input
                                type="text"
                                name="special"
                                value={values.special}
                                onChange={onChange}
                                className="text__box"
                            />
                        </label>
                    </div>
                    <button disabled={disabled}>Add to Order</button>
                    <div className="errors">
                        <div>{errors.name}</div>
                    </div>
                </form>
            </label>
        </div>
    )
}

export default Form;
