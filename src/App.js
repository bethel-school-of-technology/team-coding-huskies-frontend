import { Route, BrowserRouter, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Player from './components/Player';
import HomePage from './components/HomePage';
import UserProvider from './contexts/UserProvider';
import PodcastDetail from './components/PodcastDetail';
import PodcastComments from './components/PodcastComments';
import PodcastList from './components/PodcastList';

function App() {
  return (
  <>
  <UserProvider>
  <BrowserRouter>
      <Routes>
        <Route path ="/" element= {<NavBar/>}>
          <Route index element= {<SignIn />}/>
          <Route path = "create-account" element = {<SignUp />} />
          {/* <Route path = "message/post" element = {<AddPost/>} />
          <Route path = "message/:_id/edit" element = {<EditPost/>}/> */}
          <Route path = "podcast" element = {<PodcastList/>} />
          <Route path= "podcast/new" element={ <Player /> } />
          <Route path = "podcast/detail/:id" element = {<PodcastDetail/>} />

        </Route>
      </Routes>
   </BrowserRouter>
   </UserProvider>
   </>

  );
}

export default App;
