import React, { useState } from 'react';
import styles from './Footer.module.css';
import { linkData } from '../../../jsondata/JsonData';

const Footer: React.FC<any> = () => {
  const [text, setText] = useState("");
  const array = []

//   const columnCount = 3;
//   const modesPerColumn = Math.ceil(linkData.length / columnCount);
//   const columns = [];

//   for (let i = 0; i < columnCount; i++) {
//     const startIndex = i * modesPerColumn;
//     const endIndex = startIndex + modesPerColumn;
//     const columnData = linkData.slice(startIndex, endIndex);

//     columns.push(columnData);
//   }

  return (
    <div className={`${styles['footer-container']}`}>     
        <div className={`flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row`}>
           <div className={`flex flex-row ${styles['foo-top-child']}`}>
                <span className={`mx-4 ${styles['foo-top-icon']}`}>
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path>
                    </svg>
                </span>
                <div className={`${styles['foo-top-child-text']}`} >
                    <h3 className='font-bold'>Book An Appointment</h3>
                    <p className='font-thin'>Check Doctors availability & book appointment online</p>
                </div>
           </div>
           <div className={`flex flex-row ${styles['foo-top-child']}`}>
                <span className={`mx-4 ${styles['foo-top-icon']}`}>
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path>
                    </svg>
                </span>
                <div className={`${styles['foo-top-child-text']}`} >
                    <h3 className='font-bold'>Frequently Asked Questions</h3>
                    <p className='font-thin'>The answer to your questions can be found here</p>
                </div>
           </div>
        </div>
        <div className={`${styles['foo-middle-container']}`}>
           <div className="md:flex lg:flex sm:justify-center p-3">
                {linkData.map((group, index) => (
                    <div
                    key={index}
                    className={`${
                        (index === 2 || index === 3) ? "lg:w-1/2" : "lg:w-1/4"
                    } md:w-full p-4  lg:flex-1 ${styles['foo-middle-items']}`}
                    >
                    <h2 className="text-lg font-semibold pb-2">{group.mode}</h2>
                    <ul>
                        {group.links.map((link, i) => (
                        <li key={i} className="my-2 font-thin">
                            {link}
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
            </div>

            <div className={`${styles['foo-middle-right-con']}`}>
                <div></div>

            </div>

            {/* <div className="lg:flex">
            {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="lg:w-1/3 md:w-full p-4">
                {column.map((group, index) => (
                    <div key={index}>
                    <h2 className="text-lg font-semibold">{group.mode}</h2>
                    <ul>
                        {group.links.map((link, i) => (
                        <li key={i} className="my-2">
                            {link}
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            ))}
            </div> */}
        </div>
        <div className={`flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-around py-5 ${styles['foo-bottom-container']}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center space-x-4">
                <span>© 2023 Avis Hospitals, Inc. All rights reserved</span>
                <a href="#" className="text-blue-500">Privacy</a>
                <a href="#" className="text-blue-500">Sitemap</a>
            </div>
          </div>
          <div className={`flex flex-row justify-center my-5 ${styles['foo-bottom-right-con']}`}>
            <span className='px-3'>Follow Us</span>
            <span className='px-3'>
                {/* <!-- https://feathericons.dev/?search=facebook&iconset=brands --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                    <path d="m17.543 13.398.661-4.31h-4.136V6.29c0-1.18.578-2.329 2.43-2.329h1.88V.291S16.673 0 15.042 0c-3.407 0-5.633 2.064-5.633 5.802v3.285H5.622v4.311h3.786v10.42a15.015 15.015 0 0 0 4.66 0v-10.42h3.475Z" fill="#1877F2" />
                </svg>
            </span>
            <span className='px-3'>
                {/* <!-- https://feathericons.dev/?search=twitter&iconset=brands --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                <path d="M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.88 4.88 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.914 4.914 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.941 13.941 0 0 0 7.548 2.208" fill="#1DA1F2" />
                </svg>

            </span>
            <span className='px-3'>
                {/* <!-- https://feathericons.dev/?search=linkedin&iconset=brands --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                    <path d="M5.372 24H.396V7.976h4.976V24ZM2.882 5.79C1.29 5.79 0 4.474 0 2.883a2.882 2.882 0 1 1 5.763 0c0 1.59-1.29 2.909-2.881 2.909ZM23.995 24H19.03v-7.8c0-1.86-.038-4.243-2.587-4.243-2.587 0-2.984 2.02-2.984 4.109V24H8.49V7.976h4.772v2.186h.07c.664-1.259 2.287-2.587 4.708-2.587 5.035 0 5.961 3.316 5.961 7.623V24h-.005Z" fill="#0A66C2" />
                </svg>
            </span>
            <span className='px-3'>
                {/* <!-- https://feathericons.dev/?search=instagram&iconset=brands --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                <path clipRule="evenodd" d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="url(#instagram__a)" fillRule="evenodd" />
                <path d="M18.406 7.034a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z" fill="url(#instagram__b)" />
                <path clipRule="evenodd" d="M12 0C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 0 0-2.125 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.882 5.882 0 0 0 4.14 23.37c.764.297 1.636.5 2.913.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.884 5.884 0 0 0 2.126-1.384 5.884 5.884 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.69.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.882 5.882 0 0 0-1.384-2.126A5.883 5.883 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.258 0 12 0Zm0 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.249 1.805-.413 2.228a3.72 3.72 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.169-.054-1.804-.249-2.227-.413a3.719 3.719 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.053-1.169.249-1.804.413-2.227.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07Z" fill="url(#instagram__c)" fillRule="evenodd" />
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="instagram__a" x1="14.101" x2="7.087" y1="-1.272" y2="21.899">
                    <stop stopColor="#515BD4" />
                    <stop offset=".26" stopColor="#9510B8" />
                    <stop offset=".66" stopColor="#E51804" />
                    <stop offset="1" stopColor="#FFBF00" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="instagram__b" x1="14.101" x2="7.087" y1="-1.272" y2="21.899">
                    <stop stopColor="#515BD4" />
                    <stop offset=".26" stopColor="#9510B8" />
                    <stop offset=".66" stopColor="#E51804" />
                    <stop offset="1" stopColor="#FFBF00" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="instagram__c" x1="14.101" x2="7.087" y1="-1.272" y2="21.899">
                    <stop stopColor="#515BD4" />
                    <stop offset=".26" stopColor="#9510B8" />
                    <stop offset=".66" stopColor="#E51804" />
                    <stop offset="1" stopColor="#FFBF00" />
                    </linearGradient>
                </defs>
                </svg>
            </span>
            <span className='px-3'>
                {/* <!-- https://feathericons.dev/?search=youtube&iconset=brands --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
                    <path clipRule="evenodd" d="M22.747 4.834c.372.375.64.84.775 1.351.502 1.885.502 5.815.502 5.815s0 3.93-.502 5.815A3.017 3.017 0 0 1 21.4 19.95c-1.876.505-9.376.505-9.376.505s-7.5 0-9.376-.505a3.016 3.016 0 0 1-2.122-2.135C.024 15.93.024 12 .024 12s0-3.93.502-5.815A3.016 3.016 0 0 1 2.648 4.05c1.876-.505 9.376-.505 9.376-.505s7.5 0 9.376.505c.51.139.974.41 1.347.784ZM15.842 12 9.57 8.431v7.138L15.842 12Z" fill="#FF0302" fillRule="evenodd" />
                </svg>
            </span>
          </div>
        </div>
    </div>
  );
};

export default Footer;
