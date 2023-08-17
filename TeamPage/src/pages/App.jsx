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
    <h1>The creative crew</h1>
    <div>
      <h2>Who we are</h2>
      <section>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</section>
    </div>
      <div>
        <div className='container1'>
          <img className='peaple1' src={img1} alt="peaple1" />
          <p className='name1'>Bill Mahoney</p>
          <span className='profession1'>PRODUCT OWNER</span>
        </div>
       
        <div className='container2'>
          <img className='peaple2' src={img2} alt="peaple2" />
          <p classaname='name2'>Saba Cabrera</p>
          <span className='profession2'>ART DIRECTOR</span>
        </div>
        
        <div className='container3'> 
          <img className='peaple3' src={img3} alt="peaple3" />
          <p className='name3'>Shae Le</p>
          <span className='profession3'>TECH LEAD</span>
        </div>
        
        <div className='container4'>
          <img className='peaple4' src={img4} alt="peaple4" />
          <p className='name4'>Skylah Lu</p>
          <span className='profession4'>UX DESIGNER</span>
        </div>

        <div className='container5'>
          <img className='peaple5' src={img5} alt="peaple5" />
          <p className='name5'>Griff Richards</p>
          <span className='profession5'>DEVELOPER</span>
        </div>

        <div className='container6'>
          <img className='peaple6' src={img6} alt="peaple6" />
          <p className='name6'>Stan John</p>
          <span className='profession6'>DEVELOPER</span>
        </div>


      </div>

      <footer>created by - NattanJunior</footer>
   </div>
  )
}

export default App
