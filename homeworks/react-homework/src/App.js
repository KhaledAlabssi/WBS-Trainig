import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import './App.css';

function App() {

  const alphas = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const randomText = () => {
    let result = ''
    
    for(let i=0; i< 6; i++){
      const random = Math.floor(Math.random() * 26)
      result += alphas[random]

    }
    return result
  }

  



  return (
    <div>
      <Navbar item={`Navbar: ${randomText()}`} />
    <Main item={`Main: ${randomText()}`} />
    <Footer item={`Footer: ${randomText()}`} />
    </div>
    
  );
}

export default App;
