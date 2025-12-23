
import "./App.css"

function App() {
  const user= ["ali", "veli", "deli"]

  return (
    <>
      <h1>hello</h1>
      {user.map((e) => {
        return <h1>I am {e}</h1>
      })}
    </>
  )
}

export default App
