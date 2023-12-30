
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';

import Routing from './Routing';
import NewsContext from './context/NewsContext';
function App() {
  return (
    <div>
      {/* <div className="App">
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div> */}
      <NewsContext>
        <Routing />
      </NewsContext>
    </div>
  );
}

export default App;


// import React, { useContext } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';
// import Routing from './Routing';
// import NewsContext from './context/NewsContext';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// function App() {
//   // Use Firebase Auth to track the user's sign-in status
//   const user = useContext(AuthDetails);

//   return (
//     <div className="App">
//       {user ? (
//         // If user is signed in, show the news
//         <NewsContext>
//           <Routing />
//         </NewsContext>
//       ) : (
//         // If user is not signed in, show the sign-in and sign-up components
//         <div>
//           <SignIn />
//           <SignUp />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';
// import Routing from './Routing';
// import NewsContext from './context/NewsContext';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// function App() {
//   // Use Firebase Auth to track the user's sign-in status
//   const user = useContext(AuthDetails);

//   return (
//     <Router>
//       <div className="App">
//         {user ? (
//           // If user is signed in, show the news
//           <NewsContext>
//             <Routing />
//           </NewsContext>
//         ) : (
//           // If user is not signed in, show either Sign Up or Login component
//           <div>
//             <h2>Welcome to the News Portal</h2>
//             <p>Please choose an option:</p>
//             <div>
//               <Link to="/signup">
//                 <button>Sign Up</button>
//               </Link>
//               <Link to="/login">
//                 <button>Login</button>
//               </Link>
//             </div>
//             <Route path="/signup" component={SignUp} />
//             <Route path="/login" component={SignIn} />
//           </div>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;
