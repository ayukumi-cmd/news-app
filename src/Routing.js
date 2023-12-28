import React from 'react'
import Header from './components/Header';

import Home  from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';
import AllNews from './components/AllNews';

const Routing = () => {
  return (
    <Router>
      <Header/>
      <Routes>
            <Route exact path="/" element={<Home Component={News}/>} />
            <Route exact path="/sports" element={<AllNews name="sports"/>} />
            <Route exact path="/business" element={<AllNews name="business"/>} />
            <Route exact path="/science" element={<AllNews name="science"/>} />
            <Route exact path="/health" element={<AllNews name="health"/>} />
            <Route exact path="/technology" element={<AllNews name="technology"/>} />
            <Route exact path="/news" element={<News/>} />
           
      </Routes>
      </Router>
  )
}

export default Routing;
// import React, { useContext } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import News from './components/News';
// import AllNews from './components/AllNews';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/AuthDetails';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const user = useContext(AuthDetails);

//   return user ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" replace={true} />;
// };

// const Routing = () => {
//   return (
//     <Routes>
//       <Route path="/sports" element={<AllNews name="sports" />} />
//       <Route path="/business" element={<AllNews name="business" />} />
//       <Route path="/science" element={<AllNews name="science" />} />
//       <Route path="/health" element={<AllNews name="health" />} />
//       <Route path="/technology" element={<AllNews name="technology" />} />
//       <Route path="/login" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />
//       <PrivateRoute path="/news" element={News} />
//     </Routes>
//   );
// };

// export default Routing;
