import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'



function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="Dashboard componentBox">
            <h1>Dashboard</h1>

            <Outlet />            
            <button onClick={() => navigate('/tasks')}>Show Tasks</button>
            <button onClick={() => navigate('/messages')}>Show Messages</button>

        </div>
    )
}

export function DashboardMessages(props) {

    return (
        <div className="DashboardMessages">
            <p>Welcome to your dashboard, </p>
        </div>
    )
}

export function DashboardTasks(props) {

    const tasks = [
        {
            id: 1,
            name: 'learn React'
        },
        {
            id: 2,
            name: 'decide on capstone project'
        },
        {
            id: 3,
            name: 'sleep'
        },
        {
            id: 4,
            name: 'learn databases'
        }
    ]

    return (
        <div className="DashboardTasks">
            <ul className="tasks">
                {tasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard