import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  Header,
  Hero,
  About,
  Services,
  Works,
  Teams,
  Testimonial,
  Price,
  Blog,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <div className='App'>
      <header id='header'>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonial />
        <Price />
        <Blog />
        <Contact />
        <footer id='footer'>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
