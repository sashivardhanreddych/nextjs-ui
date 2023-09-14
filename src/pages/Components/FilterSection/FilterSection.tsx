import React, { useState, useEffect } from "react";
import { FiltersHospitalData } from '../../../jsondata/FilterData';
import styles from './FiltersSection.module.css'
// import { filterHospitalsData } from "@/jsondata/JsonData";

const FilterSection = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  const handleHospitalChange = (hospitalName: any) => {
    console.log("check", hospitalName);
    setSelectedHospital(hospitalName);
    setSelectedSpecialty(selectedSpecialty);
  };

  const handleSpecialtyChange = (specialtyName: any) => {
    console.log("check", specialtyName);
    setSelectedSpecialty(specialtyName);
    setSelectedHospital(selectedHospital);
  };

  const uniqueHospitals = Array.from(
    new Set(FiltersHospitalData[0].hospitals.map((hospital: any) => hospital.name))
  );


  const uniqueSpecialties = Array.from(
    new Set(
        FiltersHospitalData[0].hospitals
        .map((hospital: any) => hospital.specialties)
        .flat()
        .map((specialty: any) => specialty.name)
    )
  );

  const filteredHospitals = FiltersHospitalData[0].hospitals.filter((hospital: any) => {
    if (selectedHospital) {
      return hospital.name === selectedHospital;
    }
    if (selectedSpecialty) {
      return hospital.specialties.some(
        (specialty: any) => specialty.name === selectedSpecialty
      );    
    }
    return true;
  });

    // const filteredHospitalsData = filteredHospitals.map((item, index) =>{
    //     console.log("check item", item);
    //     return item;
    // })

  console.table(filteredHospitals);
  

  const clearAllFilters = () => {
    setSelectedHospital(null);
    setSelectedSpecialty(null);
  };

  console.table(uniqueHospitals);
  console.table(uniqueSpecialties);
  return (
    <section className={`${styles["container"]} flex flex-row mx-auto p-6`}>
        <div className="mb-4 bg-white-300 border-2 border-indigo-300 w-96">
            <div className={`flex flex-row justify-between p-2 ${styles["filters-title"]}`}>
                <p className="font-medium">FILTERS</p>
                <button onClick={clearAllFilters}>Clear All</button>
            </div>
            <div className="flex flex-col scroll justify-between">
                <div className={`${styles["hospitals-section"]} p-2`}>
                    <h3 className="mb-3 font-medium">Hospital Names</h3>
                    <ul className={`${styles["hospitals-list-section"]} p-2`}>
                        {selectedSpecialty ? filteredHospitals.map((specialty, index) => (
                                <>
                                    <li key={index}>
                                        <label className="me-3">
                                            <input
                                            type="checkbox"
                                            checked={selectedHospital === specialty.name}
                                            onChange={() => handleHospitalChange(specialty.name)}
                                            />
                                        </label>
                                        <span className="me-3">{specialty.name}</span>
                                    </li>
                                </>
                                )) :
                           uniqueHospitals.map((hospitalName, index) => (
                            <li key={index}>
                            <label className="me-3">
                                <input
                                type="checkbox"
                                checked={selectedHospital === hospitalName}
                                onChange={() => handleHospitalChange(hospitalName)}
                                />
                            </label>
                            <span className="me-3">{hospitalName}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${styles["spec-section"]} p-2`}>
                    <h3 className="mb-3 font-medium">Specialties</h3>
                    <ul className={`${styles["spec-list-section"]} p-2`}>
                        {selectedHospital ? filteredHospitals[0].specialties.map((specialty, index) => (
                                    <li key={index}>
                                    <label className="me-3">
                                        <input
                                        type="checkbox"
                                        checked={selectedSpecialty === specialty.name}
                                        onChange={() => handleSpecialtyChange(specialty.name)}
                                        />
                                    </label>
                                    <span className="me-3">{specialty.name}</span>
                                    </li>
                                ))
                            : uniqueSpecialties.map((specialtyName, index) => (
                                <li key={index}>
                                    <label className="me-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedSpecialty === specialtyName}
                                        onChange={() => handleSpecialtyChange(specialtyName)}
                                    />
                                    </label>
                                    <span className="me-3">{specialtyName}</span>
                                </li>
                                ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap justify-center border-2 w-2/3">
            <p>Right Side text</p>
            {filteredHospitals[0].specialties.filter((item) => item.name === selectedSpecialty).map((item, index) => (
                <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center"
                >
                    <div>Text</div>
                  <div className="text-3xl bg-white font-thin">{item.doctors[0].name}</div>
                  <div className="text-lg font-semibold mt-2">{item.doctors[0].qualification}</div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default FilterSection;
