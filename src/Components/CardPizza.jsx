import React from 'react'

const CardPizza = ({imagen,titulo, ingredientes, precio}) => {
  return (
    
<>
 <div className='productos'>

<img src={imagen} alt="Pizaa" />
<h4>{titulo}</h4>

<div className='ingredientes'>

  <h5>ingredientes:</h5>
  <p>{ingredientes}</p>
</div>

<div className='precio'>
  <h2>{precio}</h2>
  <button>Ver mas 👀</button>
  <button className='button-background' >Añadir🛒</button>

</div>

 </div>

</>
  )
}

export default CardPizza

































// import React from 'react'
// import "./CardPizza.css"

// const CardPizza = () => {
//   return (
//     <>
// <div className='box-pizzas'>

// <div className='napolitana'>

// <img src="/public/Napolitana.jpg" alt="Pizaa" />
// <h4>Pizza Napolitana</h4>

// <div className='ingredientes'>

//   <h5>Ingredientes</h5>
//   <p>🍕mozzarella, tomate, jamon, oregano</p>
// </div>

// <div className='precio'>
//   <h2>Precio:</h2>
//   <button>Ver mas 👀</button>
//   <button className='button-background' >Añadir🛒</button>

// </div>



// </div>

// <div className='española'>

// <img src="/public/Española.jpg" alt="Pizaa" />
// <h4>Pizza Napolitana</h4>

// <div className='ingredientes'>

//   <h5>Ingredientes</h5>
//   <p>🍕mozzarella, tomate, jamon, oregano</p>
// </div>

// <div className='precio'>
//   <h2>Precio</h2>
//   <button>Ver mas 👀</button>
//   <button className='button-background'>Añadir🛒</button>

// </div>



// </div>

// <div className='pepperoni'>

// <img src="/public/Pepperoni.jpg" alt="Pizaa" />
// <h4>Pizza Napolitana</h4>

// <div className='ingredientes'>

//   <h5>Ingredientes</h5>
//   <p>🍕mozzarella, tomate, jamon, oregano</p>
// </div>

// <div className='precio'>
//   <h2>Precio</h2>
//   <button>Ver mas 👀</button>
//   <button className='button-background'>Añadir🛒</button>

// </div>



// </div>


// </div>

//     </>
//   )
// }

// export default CardPizza