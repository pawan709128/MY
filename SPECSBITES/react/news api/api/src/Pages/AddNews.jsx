import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import { Link } from 'react-router-dom';

export const AddNews = () => {
  return (
    <div className='AddNews'>
      <Sidebar />
      <div className='Add_news_main'>
        <form className='form_Add_news_main'>
          <label htmlFor="name">Title:</label><br />
          <input type="text" id="name" name="name" /><br /><br />

          <label htmlFor="category">Category:</label><br/>
          <select name="category" id="category" className='Category'>
            <option>Select Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select><br /><br />

          <label htmlFor="description">Short Description:</label><br />
          <input type="text" id="description" name="description" /><br /><br/>

          <label htmlFor="thumbnail">Choose Thumbnail:</label><br />
          <input type="file" id="thumbnail" name="thumbnail" /><br /><br />

          <label htmlFor="longDescription">Long Description:</label><br />
          <textarea id="longDescription" name="longDescription" minLength="8"></textarea><br />

          <Link className='aad_news_btn' type="submit" value="Add News">Add News</Link>
        </form>
      </div>
    </div>
  );
};
