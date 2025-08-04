import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

// const jumbotron = ReactDOM.createRoot(document.getElementById('jumbotron'));

// jumbotron.render(
//      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
//       <div className="container-fluid py-3">
//         <h1 className="display-5 fw-bold text-center text-md-start">Welcome to DEV@Deakin</h1>
//         <p className="fs-5 text-center text-md-start">
//           Explore tutorials, resources, and guides to help you on your full-stack development journey.
//         </p>
//       </div>
//     </div>
// );

// const cards = ReactDOM.createRoot(document.getElementById('cards'));

// cards.render(
//   <div className="row g-2">
//       {[...Array(6)].map((_, index) => (
//         <div className="col-12 col-sm-6 col-lg-4" key={index}>
//           <div className="card h-100 shadow-sm">
//             <img
//               src='./blank-image.png'
//               className="card-img-top img-fluid"
//               alt="Card visual"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Card Title {index + 1}</h5>
//               <p className="card-text">
//                 This is a short description for card number {index + 1}. It adapts well to screen sizes.
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
// )

// a counter increment
// var count = 0;


// const incrementCount = () =>{
//   count++;

// //   root.render(
// //   <div>
// //     <h1>
// //       You Clicked {count} times
// //     </h1>

// //     <button onClick={incrementCount}>Increment</button>
// //   </div>
// // )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>
      You Clicked 0 times.
    </h1>

  <button>Increment</button>
  </div>
)


// root.render(
//   <div>
//     <h1>
//       You Clicked 0 times.
//       {/* You Clicked {count} times */}
//     </h1>

//   <button></button>
//     {/* <button onClick={incrementCount}>Increment</button> */}
//   </div>
// )


// usestate


const date = ReactDOM.createRoot(document.getElementById('date'));

date.render(
  <App />
)