import Header from './components/header/Header';
import Main_page from './components/MainPage/Main_page';
import NewsPage from './components/News/NewsPage';

import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
import NewsGallery from './components/Paginate/NewsGallery';
import About from './components/About/About';
import MemberCountries from './components/MemberCountries/MemberCountries';
import ExecutiveMember from './components/ExecutiveMember/ExecutiveMember';
import './App.css'
import ScrolltoTop from './components/ScrollToTop/ScrolltoTop';

function App() {
  return (

    
    <div>
    

    <Route exact path="/">
        <Main_page />
      </Route>

    
      <Route exact path="/news">
        <NewsPage />
      </Route>


      

      <Route exact path="/aboutus">
        <About />
      </Route>

      <Route exact path="/member_countries">
        <MemberCountries />
      </Route>

      <Route path="/news/:id">
        <NewsGallery />
      </Route>
      <Route exact path="/executive_member">
        <ExecutiveMember />
      </Route>

      <ScrolltoTop/>


      </div>
      
    
  );
}

export default App;
