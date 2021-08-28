import Header from './components/header/Header';
import Main_page from './components/MainPage/Main_page';
import NewsPage from './components/News/NewsPage';

import { BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router"
import NewsGallery from './components/Paginate/NewsGallery';
import About from './components/About/About';
import MemberContinent from './components/MemberCountries/MemberContinent';
import MemberCountries from './components/MemberCountries/MemberCountries';
import ExecutiveMember from './components/ExecutiveMember/ExecutiveMember';
import Rules from './components/Rules/Rules'
import PastChampion from './components/PastChampion/PastChampion'
import './App.css'
import ScrolltoTop from './components/ScrollToTop/ScrolltoTop';
import MemberCountry from './components/Card/MemberCountry';
import Particular_rules from './components/Rules/Particular_rules';

function App() {
  return (

      <Switch>

        <Router>

    

      <Route exact path="/">
        <Main_page />
      </Route>

    

      

      <Route exact path="/aboutus">
        <About />
      </Route>

      
      
      
      <Route exact path="/member_countries" exact component={MemberContinent}/>

      <Route path="/member_countries/:id" component={MemberCountries}>
      </Route>


      <Route exact path="/news">
        <NewsGallery />
      </Route>

      <Route path="/news/:id">
        <NewsPage />
      </Route>

      <Route path="/all-rules/:id">
        <Particular_rules />
      </Route>

      <Route exact path="/executive_member">
        <ExecutiveMember />
      </Route>

      <Route exact path="/rules">
        <Rules />
      </Route>

      <Route exact path="/past_champion">
        <PastChampion />
      </Route>


      <ScrolltoTop/>

      </Router>
      </Switch>
          
    
  );
}

export default App;
