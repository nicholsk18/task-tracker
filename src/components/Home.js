import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.home_container}>
      <h1>View All components</h1>
      <Link to='/view/allActivities'>
        <span className={style.home_btn}>View</span>
      </Link>
    </div>
  );
};

export default Home;
