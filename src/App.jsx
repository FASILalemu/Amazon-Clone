// import React, { useContext, useState } from 'react';
// import './App.css';
// import Header from './Components/Header/Header';
// import Landing from './pages/Landing/Landing';
// import Routing from './Router';
// import { auth } from './Utility/firebase';
// import { Type } from './Utility/action.type';
// import { DataContext } from './Components/DataProvider/DataProvider';
// function App() {
//   const [count, setCount] = useState(0);
//   const [(user), dispatch] = useContext(DataContext)  
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser)=>){
//       if(authUser){
//         // console.log(authUser)
//         dispatch({
//           type: Type.SET_USER,
//           user:authUser
//         })
//         }
//         else{
//           dispatch({
//             type: Type.SET_USER,
//             user:null
//           })
//       }
        
      
//   }), [])
  
//   return (
//     <div>
//       {/* <Header/> */}
//       {/* <Landing /> */}
//       <Routing />
//     </div>
//   );
// }

// export default App;
import React, { useContext, useEffect } from 'react';
import './App.css';
import { auth } from './Utility/firebase';
import { Type } from './Utility/action.type';
import { DataContext } from './Components/DataProvider/DataProvider';
import Routing from './Router'; // Ensure this is the correct import path for your Routing component

function App() {
  const { state, dispatch } = useContext(DataContext); // Correct destructuring from useContext

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log('User signed in:', authUser); // Add log to check
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        // console.log('No user signed in'); // Add log to check
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

  }, []);

  return (
    
      <Routing />
    
  );
}

export default App;
