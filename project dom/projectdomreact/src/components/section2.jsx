import React from 'react'

const Section2 = () => {
    return (
        <section className="section-view2 ">
            <div className="box-main box-hover-animation z-index-3" id="todo-mainbox">
                <div className="box-down" id="todo"></div>
                <div className="heading-box">
                    <div className="heading">To-Do List</div>
                    <div className="line"></div>
                </div>
            </div>
            <div
                className="box-main box-hover-animation z-index-3"
                id="dailyplanner-mainbox"
            >
                <div className="box-down" id="dailyplanner"></div>
                <div className="heading-box">
                    <div className="heading">Daily Planner</div>
                    <div className="line"></div>
                </div>
            </div>
            <div
                className="box-main box-hover-animation z-index-3"
                id="motivation-mainbox"
            >
                <div className="box-down" id="motivation"></div>
                <div className="heading-box">
                    <div className="heading">Motivation</div>
                    <div className="line"></div>
                </div>
            </div>
            <div
                className="box-main box-hover-animation z-index-3"
                id="pomodoro-mainbox"
            >
                <div className="box-down" id="pomodoro"></div>
                <div className="heading-box">
                    <div className="heading" id="pomodoro-heading">Pomodoro</div>
                    <div className="line"></div>
                </div>
            </div>
            <div
                className="box-main box-hover-animation z-index-3"
                id="kanbanboard-mainbox"
            >
                <div className="box-down" id="kanbanboard"></div>
                <div className="heading-box">
                    <div className="heading">Kanban Board</div>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default Section2
