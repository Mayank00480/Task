import React from 'react';
import first from '../Images/First.jpg'
import Second from '../Images/Second.jpg'
import Third from '../Images/Third.jpg'
import Carousel from 'react-bootstrap/Carousel';
import './style.css'
export default function Caraousel()
{
    return (
      <div>
       
           <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel" >
           <div className="carousel-inner">
             <div className="carousel-item active">
               <img src={first} className="d-block w-100" alt="..." />
               <p>text1</p>
             </div>
             <div className="carousel-item">
               <img src={Second} className="d-block w-100" alt="..."/>
               <p>text1</p>
             </div>
             <div className="carousel-item">
               <img src={Third} className="d-block w-100" alt="..."/>
               <p>text1</p>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
             <button style = {{position : 'relative',top:'220px', color:'black',borderRadius:'20px',backgroundColor:'lightblue'}}>Previous</button>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
           <button style = {{position : 'relative',top:'220px', color:'black',borderRadius:'20px',backgroundColor:'lightblue'}}>Next</button>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
        
      
<div className = "Text">
  <p>Tourism is a pleasing probability for foreigners to be told a variety of recent cultures; however, it along creates several opportunities for native individuals. It permits young entrepreneurs to visualize new products and services which will not be the property of the native population of residents alone.

The importance of tourism might even be viewed from 2 perspectives: the business trade and so the tourist. It’s attributable to a business that tourism has become such a very important part of each country’s economy and international standing. A country will gain lots from its sector, creating it very important to the economy of a nation’s foundation. This sector, once thriving, brings in an associate abundance of wealth, growth, exposure, and employment opportunities. Whether a tourist is ordering margaritas on the beach, taking a locality food tour, or lockup up their skies to relish some succeeding drinks, they’re tributary to the country’s well-being. The foremost edges of business live to gain creation and generation of jobs.

</p>
</div>
</div>
  )
}