import React from 'react'
import { Sidebar } from '../Components/Sidebar'

export const MyDashbord = () => {
  return (
    <div className='mine_MyDashbord'>
      <Sidebar/>
      <div className='main_card'>
      <div className="Dashbord_cart">
        <h2>Total News</h2>
        <h1>58  </h1>
      </div>
      <div className="Dashbord_cart">
      <h2>Published News</h2>
        <h1>25</h1>
      </div>
      <div className="Dashbord_cart">
      <h2>Scheduled News</h2>
        <h1>28</h1>
      </div>
    </div>  
    </div>
  )
}
