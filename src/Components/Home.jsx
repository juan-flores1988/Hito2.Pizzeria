import CardPizza from "./CardPizza"
import Header from "./Header"
import "./Home.css"
import "./CardPizza.css"


const Home = () => {
  return (
        <>
         <div className="box-Home">
            <div className="text">
    <h1>¡Pizzeria Mamma Mia!</h1>
    <h3>¡Tenemos las mejores pizza que podras encontrar!</h3>
    </div>
    
    </div> 

<div className="home-card">
 <CardPizza imagen="/public/Napolitana.jpg" titulo=" Pizza Napolitana" ingredientes="🍕Mozzarella, tomate, oregano" precio= "Precio: $5.950"/>
 <CardPizza imagen="/public/Española.jpg" titulo="Pizza Española" ingredientes="🍕Mozzarella, gorgonzola, provolone" precio="Precio: $6.950"/>
 <CardPizza imagen="/public/Pepperoni.jpg" titulo="Pizza Pepperoni" ingredientes="🍕Mozzarella, pepperoni, oregano" precio="Precio: $6.950"/>
 </div>

    </>
  )
}

export default Home