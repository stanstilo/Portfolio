
import Header from './header'
import Footer from './footer'
import Main from './main'
import About from './about'
import Portfolio from './portfolio'

const App = () => {
  return (
    <div>
      <Header  />
      <Main id="main"/>
      <About id="about"/>
      <Portfolio id="portfolio" />
      <Footer />
    </div>
  );
}

export default App;
