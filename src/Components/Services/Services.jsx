import React, { useState } from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  
  const [selectedService, setSelectedService] = useState(null);

  const openPopup = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);

  }
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index)=>{
          return <div key={index} className='services-format'>
             <h3>{service.s_no}</h3>
             <h2>{service.s_name}</h2>
             <p>{service.s_desc.substring(0, 100)}...</p>
             <div className='services-readmore' onClick={() => openPopup(service)}>
              <p>Read More</p>
              <img src={arrow_icon} alt="Read more" />
             </div>
          </div>
        })}
      </div>
      {selectedService && (
        <div className='popup-overlay'>
          <div className='popup-content'>
            <h2>{selectedService.s_name}</h2>
            <p>{selectedService.s_desc}</p>
            <button className='close-btn' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
