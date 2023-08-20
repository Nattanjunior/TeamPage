import { useState } from 'react'
import '../style/App.css'
import img1 from '../images/photo1.png'
import img2 from '../images/photo2.png'
import img3 from '../images/photo3.png'
import img4 from '../images/photo4.png'
import img5 from '../images/photo5.png'
import img6 from '../images/photo6.png'

function App() {


  return (
   <div>

    <header >
      <h1>The creative crew</h1>
      <h2>Who we are</h2>
      <p>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</p>
    </header>

      <main>

      <section>
        <img className='peaple1' src={img1} alt="" /> 
        <p className='name1'>Bill Mahoney</p>
        <p className='office1'>PRODUCT OWNER</p>

        <img  className='peaple2' src={img2} alt="" />
        <p className='name2'>Saba Cabrera</p>
        <p className='office2'>ART DIRECTOR</p>

        <img className='peaple3' src={img3} alt="" />
        <p className='name3'>Shae Le</p>
        <p className='office3'>TECH LEAD</p>

        <img className='peaple4' src={img4} alt="" />
        <p className='name4'>Skylah Lu</p>
        <p className='office4'>UX DESIGNER</p>

        <img className='peaple5' src={img5} alt="" />
        <p className='name5'>Griff Richards</p>
        <p className='office5'>DEVELOPER</p>

        <img className='peaple6' src={img6} alt="" />
        <p className='name6'>Stan John</p>
        <p className='office6'>DEVELOPER</p>
      </section>
         
        
        
      </main>        

      <footer>created by - NattanJunior</footer>

   </div>
  )
}

export default App
