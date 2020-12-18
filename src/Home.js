import React from 'react'
import { useHistory } from "react-router-dom";
import image from "./media/Pizza.jpg"

export default function Home() {
  const history = useHistory();
  const routeToPizza = () => {
    history.push('/pizza');
  }

  return (
    <div className='home__wrapper'>
      <img
        className='home__image'
        src={image}
        alt='pizza'
      />
      <button
        onClick={routeToPizza}
        className='order__button'
      >
        Order Now!
      </button>
    </div>
  )
}

