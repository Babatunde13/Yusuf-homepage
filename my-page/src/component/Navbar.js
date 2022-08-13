 import React from 'react';
 
 export default function Navbar(){
    return(
          <div className="Navbar">   
     <header className="header">
     <nav className="navbar">
       <div className="menu-icon">
         <div className="hambuger">
         <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
         </div>
         <div className="close-icon" id="close-icon">
           <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
         </div>
       </div>
        <div className="nav-logo">
    
    <img src="/images/logo.svg" alt="room" /> 
  
       </div>
       <div className="nav-bar-list">
         <ul>
 <li> Home</li>
 <li>Shop</li>
 <li> About</li> 
 <li> Contact</li>
 </ul>
 </div>
 </nav>
 </header>
 </div>

 );
 }