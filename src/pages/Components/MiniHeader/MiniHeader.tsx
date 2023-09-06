import React from 'react';
import Link from 'next/link';
import styles from './MiniHeader.module.css'; 

const MiniHeader: React.FC<any> = () => {
  const handleSideMenuClick = () =>{
    console.log("mini header clicked mobile");
  }
  return (
    // <div className="bg-light-sky-blue h-12 flex items-center justify-end px-4">
    <div className={styles['mini-header']}>
      <div className={`hidden md:flex ${styles['mini-header-web']}`}>
        <Link legacyBehavior href="/help">
          <a className="text-white ml-4">Need help?</a>
        </Link>
        <Link legacyBehavior href="/careers">
          <a className="text-white ml-4">Careers</a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className="text-white ml-4">Contact Us</a>
        </Link>
      </div>
      <div className={`hidden md:flex justify-content-space-around ${styles['mini-header-mobile']}`}>
        <div className={styles['mini-header-title-icon']}>
           Aster Hospitals
        </div>
        <div className={styles['side-menu-icon']} onClick={handleSideMenuClick}>
          <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
