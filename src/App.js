import { Route, BrowserRouter, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Player from './components/Player';
import HomePage from './components/HomePage';

function App() {
  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path ="/" element= {<NavBar/>}>
          <Route index element= {<SignIn />}/>
          <Route path = "create-account" element = {<SignUp />} />
          {/* <Route path = "message/post" element = {<AddPost/>} />
          <Route path = "message/:_id/edit" element = {<EditPost/>}/> */}
          <Route path = "player" element = {<HomePage/>} />
          <Route path= "player/new" element={ <Player /> } />

        </Route>
      </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
