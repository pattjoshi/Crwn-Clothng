import React from 'react';
import Directory from '../../component/Directory/DirectoryComponent'
import "./Homepage.style.scss";


const HomePage = () => (
    // This is functonal component becouse i dont need lifecycle method yeat
    <div className='homepage'>

        <Directory />
    </div>
);

export default HomePage;