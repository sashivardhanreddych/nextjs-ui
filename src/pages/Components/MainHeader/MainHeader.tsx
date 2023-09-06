import React, { useState } from 'react';
import Link from 'next/link';
import styles from './MainHeader.module.css'; // Import the CSS Module
// import MiniHeader from '../MiniHeader/MiniHeader';
// import Logo from './Logo'; // Import your logo component

const hospitalsData = [
  { state: 'Kerala', hospitals: ['Hospital 1', 'Hospital 2', 'Hospital 3', 'Hospital 4', 'Hospital 5', 'Hospital 6'] },
  { state: 'Karnataka', hospitals: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D', 'Hospital E', 'Hospital F'] },
  { state: 'Andhra Pradesh', hospitals: ['Hospital 1', 'Hospital 2', 'Hospital 3', 'Hospital 4', 'Hospital 5', 'Hospital 6'] },
  { state: 'Maharashtra', hospitals: ['Hospital A', 'Hospital B'] },
  { state: 'Telangana', hospitals: ['Hospital 1', 'Hospital 2', 'Hospital 3', 'Hospital 4', 'Hospital 5', 'Hospital 6'] },
  { state: 'Our Clinics', hospitals: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D', 'Hospital E', 'Hospital F'] },
];

const specialitiesData = [
  {
    column1: "Internal Medicine",
    column2: "Endocrinology & Diabetology",
  },
  {
    column1: "Cardiac Surgery",
    column2: "Cardiology",
  },
  {
    column1: "Neurology",
    column2: "Neuro Surgery",
  },
  {
    column1: "Orthopaedics",
    column2: "Medical Oncology",
  },
  {
    column1: "Radiation Oncology",
    column2: "Surgical Oncology",
  },
  {
    column1: "Obstetrics & Gynaecology",
    column2: "Paediatrics & Neonatology",
  },
  {
    column1: "Nephrology",
    column2: "Urology",
  },
  {
    column1: "Rheumatology",
    column2: "Plastic Reconstructive & Aesthetic Surgery",
  },
  {
    column1: "Fertility and IVF",
    column2: "Nuclear Medicine",
  },
  {
    column1: "Multi Organ Transplant",
    column2: "Pulmonology",
  },
  {
    column1: "Critical Care Medicine",
    column2: "Emergency Medicine",
  },
  {
    column1: "Gastro Science",
    column2: "Integrated Liver Care",
  },
  {
    column1: "Spine Surgery",
    column2: "Vascular & Endovascular Surgery",
  },
  {
    column1: "General Surgery & Allied Specialities",
    column2: "Bariatric Metabolic Surgery",
  },
  {
    column1: "ENT And Head & Neck Surgery",
    column2: "Craniomaxillofacial Surgery",
  },
  {
    column1: "Aster NeuKIDS",
    column2: "Ophthalmology",
  },
  {
    column1: "Dentistry",
    column2: "Dermatology",
  },
  {
    column1: "Paediatric Rheumatology & Immunology",
    column2: "Paediatric ENT",
  },
  {
    column1: "Physical Medicine & Rehabilitation",
    column2: "Anesthesiology",
  },
  {
    column1: "Psychiatry & Counselling Services",
    column2: "Pain & Palliative Medicine",
  },
  {
    column1: "Diagnostics & Blood Bank",
    column2: "AyurVAID",
  },
  {
    column1: "Infectious Diseases & Travel Medicine",
    column2: "Behavioural Medicine",
  },
  {
    column1: "Paediatric Surgery",
    column2: "Child Development Centre",
  },
  {
    column1: "Surgical Gastroenterology & ILC",
    column2: "Ortho Oncology",
  },
  {
    column1: "Laboratory Medicine",
    column2: "Haematology, Haemato Oncology & BMT",
  },
  {
    column1: "Robotic Surgery",
    column2: "Podiatry",
  },
  {
    column1: "Head and Neck Oncology",
    column2: "ENT and Hearing Implantology",
  },
  {
    column1: "General & GI Surgery",
    column2: "Clinical Imaging & Interventional Radiology",
  },
  {
    column1: "Nutrition & Dietetic",
    column2: "Haematology",
  },
];


const MainHeader: React.FC<any> = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSpecDropdown, setShowSpecDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleSpecMouseEnter = () => {
    setShowSpecDropdown(true);
  };

  const handleSpecMouseLeave = () => {
    setShowSpecDropdown(false);
  };

  const handleLinkClick = (e:any) => {
    e.preventDefault(); // Prevents the default navigation behavior
    // Your custom logic here (e.g., opening a modal or performing an action)
  };

  const handleSideMenuClick = () => {
    // Your custom onClick behavior here
    console.log('Side menu clicked');
    // You can add your custom logic here
  };

  const splitHospitalsData = (data: any) => {
    const chunks = [];
    const chunkSize = 3; // Number of states per row

    for (let i = 0; i < data.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
    }

    return chunks;
  };

  const groupedHospitals = splitHospitalsData(hospitalsData);

  return (
    <div className={styles['main-header']}>     
      <div className={`hidden md:flex`}>
        Aster Hospitals
        {/* <Logo /> */}
      </div>
      <div className={styles['header-right']}>
        <Link legacyBehavior href="/our-hospitals#" onClick={handleLinkClick}>
          <a className={`text-white flex ${styles['menu-link']}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className={styles['menu-link-left-icon']}>
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
              </svg>
            </span>
            <span className='flex flex-col'>Our Hospitals
              {showDropdown && (
                <div className={`${styles['dropdown-content']}`}>
                  {groupedHospitals.map((group, index) => (
                    <div key={index} className={styles['hospitals-row']}>
                      {group.map((stateData: any) => (
                        <div key={stateData.state} className={styles['state-box']}>
                          <h3 className='mb-3 font-bold'>{stateData.state}</h3>
                          <ul>
                            {stateData.hospitals.map((hospital: any) => (
                              <li key={hospital}>{hospital}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </span>
            <span className={styles['menu-link-right-icon']}>
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </span>
          </a>
        </Link>
        <Link legacyBehavior href="/our-specialities#" onClick={handleLinkClick}>
          <a className={`text-white flex ${styles['menu-link']}`} onMouseEnter={handleSpecMouseEnter} onMouseLeave={handleSpecMouseLeave}>
            <span className={styles['menu-link-left-icon']}>
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
              </svg>
            </span>
            <span className='flex flex-col'>Our Specialities
              {showSpecDropdown && (
                <div className={`${styles['spec-dropdown-content']}`}>
                  <div className={`${styles['sticky-header']}`}>
                    <h3 className="text-lg font-bold border-b border-gray-400 pb-3">Specialities</h3>
                  </div>
                  <div className={`${styles['specialities-container']} flex`}>
                    <div className={`${styles['specialities-column']} flex-1 pr-4`}>
                      {specialitiesData.map((speciality, index) => (
                        <div key={index} className={styles['state-box']}>
                          <ul>
                            <li>{speciality.column1}</li>
                          </ul>
                        </div>
                        ))}
                      </div>
                    <div className={`${styles['specialities-column']} flex-1 pl-4`}>
                      {specialitiesData.map((speciality, index) => (
                        <div key={index} className={styles['state-box']}>
                          <ul>
                            <li>{speciality.column2}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </span>
            <span className={styles['menu-link-right-icon']}>
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
              </svg>
            </span>
          </a>
        </Link>
        <Link legacyBehavior href="/book-an-appointment" onClick={handleLinkClick}>
          <a className={`text-white flex ${styles['menu-link']}`}>Book an Appointment</a>
        </Link>
        <div className={`hidden md:flex`}>
        <Link legacyBehavior href="/international-patients" onClick={handleLinkClick}>
          <a className={`text-white flex ${styles['menu-link']}`}>International Patients</a>
        </Link>
        </div>
      </div>
      <div className={`hidden md:flex ${styles['side-menu-icon']}`} onClick={handleSideMenuClick}>
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
        </svg>
      </div>
    </div>
  );
};

export default MainHeader;
