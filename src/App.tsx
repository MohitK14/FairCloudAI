//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import logoutLogo from './assets/images/logout.png'
import './App.css'
import  Doughnut  from './charts/Chart';
import 'chart.js/auto';

function App() {

  return (
    <>
      <div className="dashboard">
        <div className='card'>
          <div className="autopilot">
              <p>Auto-pilot</p>
          </div>
          <div className='logout'><img src={logoutLogo}/></div>
          <div className="enabled">
              <p>Enabled</p>
          </div>
        </div>
      
        <div className="card savings-summary">
            <div className="summary col-6">
              <h2>Savings Summary</h2>
              <p>Approved: $1,091,994</p>
              <p>Unapproved: $80,102</p>
            </div>
            <div className='col-6 doughnut'>
            <Doughnut/>
            </div>
            
        </div>
        <div className="card">
            <h2>Annual Expenditure</h2>
            <p>$1,020,123.23</p>
        </div>
        <div className="card">
            <h2>Annual Savings</h2>
            <p>$677,191.90</p>
        </div>
    </div>
    </>
  )
}

export default App
