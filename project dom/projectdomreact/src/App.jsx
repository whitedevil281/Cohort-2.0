
import './css/style.css'
import Section1 from './components/section1.jsx'
import Section2 from './components/section2.jsx'
import './script.js'

function App() {
  

  return (
    <>
      <div className="body">
        <main>
          <div className="blur-overlay"></div>
          <div className="chnagetheme">
            <button id="changetheme">Change Theme</button>
          </div>
          <Section1 />
          <Section2 />
          <div
            className="box-anchor z-index-3 anchor-todo-bg"
            id="anchor-box-todo"
            data-original-id="anchor-box-todo"
          ></div>
          <div
            className="box-anchor z-index-3 anchor-dailyplanner-bg"
            id="anchor-box-dailyplanner"
            data-original-id="anchor-box-dailyplanner"
          >
            <button className="exitbutton" id="dailyplanner-exitbutton">X</button>
          </div>
          <div
            className="box-anchor z-index-3 anchor-motivation-bg"
            id="anchor-box-motivation"
            data-original-id="anchor-box-motivation"
          >
            <button className="exitbutton" id="todo-exitbutton">X</button>
          </div>
          <div
            className="box-anchor z-index-3 anchor-pomodoro-bg"
            id="anchor-box-pomodoro"
            data-original-id="anchor-box-pomodoro"
          >
            <button className="exitbutton" id="pomodoro-exitbutton">X</button>
          </div>
          <div
            className="box-anchor z-index-3 anchor-kanbanboard-bg"
            id="anchor-box-kanbanboard"
            data-original-id="anchor-box-kanbanboard"
          >
            <button className="exitbutton" id="kanbanboard-exitbutton">X</button>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
