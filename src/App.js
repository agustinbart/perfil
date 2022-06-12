import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Sections/Main';

function App() {
  return (
    <div className='App'>
      <div className='body'>

        <header>
          <Navbar />
        </header>

        <main>
          <Main />
        </main>

        <footer>
          <p className='footer'>Built with ReactJS by Agustín Bartel</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
