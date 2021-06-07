import React from 'react'
import UserCard from '../../components/UserCard/UserCard'


const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-usercard">
          <UserCard/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
