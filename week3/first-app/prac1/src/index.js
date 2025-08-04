import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import LogoImage from './Image'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>This is a heading!</h1>
    <p>This is a para!</p>
  </div>
);

// const style = {
//   color: 'red',
//   fontSize: '30px' 
// }

// const datediv = ReactDOM.createRoot(document.getElementById('newdate'));

// const trimester = "T2";
// var d = new Date();
// const year = d.getFullYear();

// // datediv.render(
// //   <h3 style={style}>
// //     The current Trimester is : {trimester} {year}
// //   </h3>
// // );

// // component
// datediv.render(
//  <HeaderComponent />
// );


// const logo = ReactDOM.createRoot(document.getElementById('logo'));

// logo.render(
//   <div>
//     {/* <img src="./logo192.png" alt="Basic Logo"/> */}
//     <LogoImage /> 
//      {/* <img src="./logo512.png" alt="Basic Logo"/> */}
//   </div>
// );

// // //creating a component
// function HeaderComponent(){
//   return(<h3 style={style}>
//     The current Trimester is : {trimester} {year}
//   </h3>)
// }