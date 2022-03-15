import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import {useSelector, useDispatch} from 'react-redux'
import { FaTrash } from 'react-icons/fa'


function Cart(product) {
  const {cartItems} = useSelector(state=>state.cartReducer)
  const [totalAmount, setTotalAmount] = useState(0)

  const dispatch = useDispatch()
  {/** Suppression du panier */}
  const deleteFromCart =() => {
    dispatch({type:"DELETE_FROM_CART", payload:product})
  }

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price
    })
    setTotalAmount(temp)
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])


  return (
    <Layout>
        <table className='table mt-3'>

          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Prix</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/** Affichage de l'element qu'on ajoutera dans le panier */}
            {cartItems.map(item=>{
              return <tr>
                <td>
                  <img src={item.imageUrl} alt="image" height="80px" width="80px" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><FaTrash onClick={()=> deleteFromCart(item)} /></td>
              </tr>
            })}
          </tbody>
        </table>

        <div className='d-flex justify-content-end mt-3'>
          {/** La somme totale de tout les produits */}
          <h1 className='total-amount'>Prix Total = {totalAmount} fcfa</h1>
        </div>

        <div className='d-flex justify-content-end mt-3'>
          <button>Valider l'Achat</button>
        </div>
    </Layout>
  )
}

export default Cart