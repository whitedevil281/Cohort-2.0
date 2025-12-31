
import "./App.css";
import Nav from "./components/Nav";
import Sidemenu from "./components/Sidemenu";
import Hero from "./components/Hero";
function App() {

  return (
    <>
    <main className="w-full h-screen grid grid-cols-[1fr_5fr] ">
      <div className="">
        <Sidemenu/>
      </div>
      <div className="mx-4 my-4">
        <Nav/>
        <Hero/>
      </div>
    </main>
    </>
  )
}

export default App
