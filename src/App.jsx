import './App.css'
import Container from './components/Container/Container'
import { MainDiv } from './components/MainDiv/MainDiv'

function App() {

  return (
    <>
      <div className='grid-container place-center w-100 h-100'>
        <Container>
          <MainDiv/>
        </Container>
      </div>
    </>
  )
}

export default App
