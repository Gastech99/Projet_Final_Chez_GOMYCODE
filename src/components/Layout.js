import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../styleSheets/Layout.css'
import Loader from './Loader'

function Layout(props) {
  {/** Il nous permet d'acceder a l'entete dans chaque pase du site */}
  return (
    <div>

    {props.loading && (<Loader/>)}

        <Header/>
        <div className='content'>
            {props.children}
        </div>
        {/*<Footer/>*/}
    </div>
  )
}

export default Layout