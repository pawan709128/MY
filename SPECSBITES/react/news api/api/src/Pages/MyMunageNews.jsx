import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Link } from 'react-router-dom'

export const MyMunageNews = () => {
  return (
    <div className='MyMunageNews'> 
      <Sidebar/>
    <div className='MyMunageNews_main'><Link className='MyMunageNews_main_btn' to='/AddNews' type="submit" value="Add News">Add News</Link></div> 
    <table className='MyMunageNews_teble'>
      <tr>
        <th>S.N</th>
        <th>Thumbnail</th>
        <th>Title</th>
        <th>Category</th>
        <th>Edit</th>
        <th>Del</th>
        <th>Status</th> 
      </tr>
      <tr>
        <td>1</td>
        <td><img src="https://www.hindustantimes.com/ht-img/img/2024/05/18/550x309/Bibhav-Kumar---File-_1715856225951_1716016949842.jpg" alt="" /></td>
        <td><p>The Delhi Police have arrested Bibhav Kumar for allegedly assaulting AAP MP Swati Maliwal inside Delhi chief minister Arvind Kejriwal's house in the national capital.</p></td>
        <td>India</td>
        <td><i className=" btn btnedit fa-regular fa-pen-to-square"></i></td>
        <td><i className=" btn btndelet fa-solid fa-trash"></i></td>
        <td><i className=" btn btntoggle fa-solid fa-toggle-on"></i> </td>
      </tr>
      <tr>
        <td>2</td>
        <td><img src="https://www.hindustantimes.com/ht-img/img/2024/05/18/550x309/ts_inter_hall_ticket_1716002367510_1716002378005.png" alt="" /></td>
        <td><p>TS Inter Supply Hall Ticket 2024 for 1st year, 2nd year released at tsbie.cgg.gov.in, download link here</p></td>
        <td>Job</td>
        <td><i className=" btn btnedit fa-regular fa-pen-to-square"></i></td>
        <td><i className=" btn btndelet fa-solid fa-trash"></i></td>
        <td><i className=" btn btntoggle fa-solid fa-toggle-on"></i> </td>
      </tr> 
      <tr>
        <td>3</td>
        <td><img src="https://images.projectsgeek.com/2016/05/College-Selector-Android.jpg" alt="" /></td>
        <td><p>BCA or Bachelor in Computer Application is a three year undergraduate degree course that trains students in computer technology and application, leading to various career prospects. </p></td>
        <td>Education</td>
        <td><i className=" btn btnedit fa-regular fa-pen-to-square"></i></td>
        <td><i className=" btn btndelet fa-solid fa-trash"></i></td>
        <td><i className=" btn btntoggle fa-solid fa-toggle-on"></i> </td>
      </tr>
      <tr>
        <td>4</td>
        <td><img src="https://www.hindustantimes.com/ht-img/img/2024/05/17/550x309/Bhojpuri-actor-and-singer-Pawan-Singh---HT-_1715961211825.jpg" alt="" /></td>
        <td><p> Rebels redraw battle lines in five seats</p></td>
        <td>Bihar</td>
        <td><i className=" btn btnedit fa-regular fa-pen-to-square"></i></td>
        <td><i className=" btn btndelet fa-solid fa-trash"></i></td>
        <td><i className=" btn btntoggle fa-solid fa-toggle-on"></i> </td>
      </tr>
      <tr>
        <td>5</td>
        <td><img src="https://www.hindustantimes.com/ht-img/img/2024/05/18/550x309/milk_tea_thumb_1716020656505_1716020670025.jpg" alt="" /></td>
        <td><p>Nutrition experts warn against the dangers of excessively boiling milk tea as it may diminish nutrients, cause acidity, and may produce carcinogens.</p></td>
        <td>Lifestyle</td>
        <td><i className=" btn btnedit fa-regular fa-pen-to-square"></i></td>
        <td><i className=" btn btndelet fa-solid fa-trash"></i></td>
        <td><i className=" btn btntoggle fa-solid fa-toggle-on"></i> </td>
      </tr>
      
    </table> 
    </div>
  )
}
