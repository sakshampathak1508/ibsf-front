import Header from './components/header/Header';
import Main_page from './components/MainPage/Main_page';
import NewsPage from './components/News/NewsPage';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewsGallery from './components/Paginate/NewsGallery';
import About from './components/About/About';
import MemberContinent from './components/MemberCountries/MemberContinent';
import MemberCountries from './components/MemberCountries/MemberCountries';
import ExecutiveMember from './components/ExecutiveMember/ExecutiveMember';
import Rules from './components/Rules/Rules'
import Champion from './components/Champion/Champion_List'
import Particular_Champ from './components/Champion/Particular_Champ'
import './App.css'
import AutoTopScroll from './components/AutoScroll/AutoTopScroll';
import ScrolltoTop from './components/ScrollToTop/ScrolltoTop'
import Particular_rules from './components/Rules/Particular_rules';
import NewsbyTag from './components/NewsByTag/NewsbyTag';
import EventPage from './components/Event/EventPage';
import ParticularEvent from './components/Event/ParticularEvent';
import Footer from './components/Footer/Footer';

function App() {
  return (

        <>
        
        <Router>

        <Switch>

      <Route exact path="/" component={Main_page}/>
      <Route exact path="/aboutus" component={About}/>
      <Route exact path="/member_countries" exact component={MemberContinent}/>
      <Route path="/member_countries/:id" component={MemberCountries}/>
      <Route exact path="/news" component={NewsGallery}/>
      <Route path="/news/:id" component={NewsPage}/>
      <Route path="/all-rules/:id" component={Particular_rules}/>
      <Route path="/newsbytag/:tagname" component={NewsbyTag}/>
      <Route exact path='/events' component={EventPage}/>
      <Route path='/events/:id' component={ParticularEvent}/>

      <Route exact path="/executive_member" component={ExecutiveMember}/>
        

      <Route exact path="/rules" component={Rules}/>
      <Route exact path="/champion" component={Champion}/>
  

      <Route  path="/champion/:id" component={Particular_Champ}/>
    
      </Switch>
      <Footer/>
      <ScrolltoTop/>
      <AutoTopScroll/>
      </Router>

      </>
  );
}

export default App;
