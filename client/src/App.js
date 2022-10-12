<<<<<<< HEAD
import React from 'react';
=======
import React, { setState, useState } from 'react';
>>>>>>> pre-production
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Home from './pages/Home';

<<<<<<< HEAD
=======


>>>>>>> pre-production
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
<<<<<<< HEAD
=======

  const [ isClicked, setClicked] = useState('false')
  
>>>>>>> pre-production
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
<<<<<<< HEAD
                element={<Home />}
=======
                element={<Home
                  isClicked = {isClicked} setClicked = {setClicked}
                  ></Home>}
>>>>>>> pre-production
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
                <Route path="/profile">
<<<<<<< HEAD
                  <Route path=":username" element={<Profile />} />
                  <Route path="" element={<Profile />} />
                </Route>
=======
                  <Route path=":username" 
                  element={<Profile
                    isClicked = {isClicked} setClicked = {setClicked}
                    ></Profile>}
                   />
                  <Route path="" 
                  element={<Profile
                    isClicked = {isClicked} setClicked = {setClicked}
                    ></Profile>} 
                  />
                </Route> 
>>>>>>> pre-production
                <Route
                  path="/thought/:id"
                  element={<SingleThought />}
                />
              <Route
                path="/thought"
                element={<SingleThought />}
              />
              <Route
              path="*"
              element={<NoMatch />}
            />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
