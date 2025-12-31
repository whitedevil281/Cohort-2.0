
import './App.css'

function App() {

  const  submithandler =(params) => {
    
    params.preventDefault();
    console.log(params);
    
  }
  return (
    <>
    <form onSubmit={(e) => {
      submithandler(e)
    }
    }>
      <input type="text" placeholder='Enter ur text' />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
