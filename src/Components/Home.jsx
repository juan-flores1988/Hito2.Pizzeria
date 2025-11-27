import CardPizza from "./CardPizza"
import Header from "./Header"
import "./Home.css"
import "./CardPizza.css"
import { pizzas } from "../pizzas"
import { useState } from "react"

import React from 'react'

const Home = () => {
  return (
    
    <div className="home-cards">

{pizzas.map((pizza) => (
  <CardPizza 
  img={pizza.img}
  key={pizza.id}
  name={pizza.name}
  desc={pizza.desc}
  ingredients={pizza.ingredients}
  price={pizza.price}
  />
))}



    </div>
  )
}

export default Home