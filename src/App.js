import './App.css';
import SearchPage from './pages/searchPage/SearchPage';
import CompanyDetails from './pages/details/CompanyDetails';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
function App() {

     return (
         <Router>
             <SearchPage></SearchPage>
              <Routes>
                  <Route path={"/search"} component={SearchPage} exact />
                  <Route exact path={"/company-details"} component={CompanyDetails} />
              </Routes>
         </Router>

    );
}

export default App;
