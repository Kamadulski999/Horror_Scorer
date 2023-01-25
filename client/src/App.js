import {useState} from 'react';
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
import Movie from './pages/Movie';



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

  
  const [movieObj, setMovieObj] = useState({"id": 760161,  
  "original_language": "en",
  "original_title": "Orphan: First Kill",
  "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
  "popularity": 5279.659,
  "poster_path": "/l8WZDmjJCxOhGToTlhO6l9YAytr.jpg",
  "release_date": "2022-07-27",
  "title": "Orphan: First Kill",
  "video": false,
  "vote_average": 6.9,
  "vote_count": 868
  })
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home
                  movieObj={movieObj} setMovieObj={setMovieObj}                 
                  ></Home>}
              /> 
                            <Route
                path="/movie"
                element={<Movie 
                  movieObj = {movieObj} setMovieObj={setMovieObj}                
                  ></Movie>}
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
                  <Route path=":username" 
                  element={<Profile                    
                    ></Profile>}
                   />
                  <Route path="" 
                  element={<Profile                    
                    ></Profile>} 
                  />
                </Route> 
                <Route
                  path="/thought/:id"
                  element={<SingleThought                  
                    ></SingleThought>}
                />
              <Route
                path="/thought"
                element={<SingleThought               
                  ></SingleThought>}
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
