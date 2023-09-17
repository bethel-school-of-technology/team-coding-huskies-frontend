import { Route, BrowserRouter, Routes} from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import LogInNavbar from './components/LogInNavbar';
import LogInPage from './components/LogInPage';


function App() {
  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path ="/" element= {<LogInNavbar/>}>
          <Route index element= {<LogInPage />}/>
          <Route path = "create-account" element = {<CreateAccount />} />
          </Route>
         </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
