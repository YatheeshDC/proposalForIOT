// // // client/src/components/Status.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Status = ({ token }) => {
// //   const [washrooms, setWashrooms] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const response = await axios.get('http://localhost:5000/api/washroom', {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setWashrooms(response.data);
// //     };

// //     fetchData();
// //   }, [token]);

// //   const updateStatus = async (id, status) => {
// //     await axios.put(`http://localhost:5000/api/washroom/${id}`, { status }, {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     setWashrooms((prev) => prev.map((washroom) =>
// //       washroom._id === id ? { ...washroom, status } : washroom
// //     ));
// //   };

// //   return (
// //     <div>
// //       {washrooms.map((washroom) => (
// //         <div key={washroom._id}>
// //           <h3>Washroom Status: {washroom.status}</h3>
// //           <button onClick={() => updateStatus(washroom._id, 'Cleaning in Progress')}>
// //             Start Cleaning
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Status;



// import React, { useState } from 'react';

// const Status = () => {
//   // Sample data for bathrooms
//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   // State to track the selected city
//   const [selectedCity, setSelectedCity] = useState('');

//   // Handle dropdown change
//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   // Get bathrooms for the selected city
//   const selectedBathrooms = bathrooms.filter(bathroom => bathroom.city === selectedCity);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Bathroom Status</h1>
      
//       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//         <select 
//           value={selectedCity}
//           onChange={handleCityChange}
//           style={{ padding: '10px', fontSize: '16px' }}
//         >
//           <option value="">Select a City</option>
//           {Array.from(new Set(bathrooms.map(bathroom => bathroom.city))).map(city => (
//             <option key={city} value={city}>{city}</option>
//           ))}
//         </select>
//       </div>
      
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         {selectedBathrooms.map((bathroom) => (
//           <div key={bathroom.id} style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '10px',
//             margin: '10px',
//             width: '200px',
//             textAlign: 'center'
//           }}>
//             <h2>{bathroom.city}</h2>
//             <p>{bathroom.location}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Status;
// import React, { useState } from 'react';

// const Status = () => {
//   // Sample data for bathrooms
//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   // State to track janitor login times
//   const [loginTimes, setLoginTimes] = useState({});

//   // Handle bathroom click
//   const handleBathroomClick = (bathroomId) => {
//     const currentTime = new Date().toLocaleString();
//     setLoginTimes((prevLoginTimes) => ({
//       ...prevLoginTimes,
//       [bathroomId]: currentTime,
//     }));
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Bathroom Status</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         {bathrooms.map((bathroom) => (
//           <div
//             key={bathroom.id}
//             onClick={() => handleBathroomClick(bathroom.id)}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               padding: '10px',
//               margin: '10px',
//               width: '200px',
//               textAlign: 'center',
//               cursor: 'pointer'
//             }}
//           >
//             <h2>{bathroom.city}</h2>
//             <p>{bathroom.location}</p>
//             {/* {loginTimes[bathroom.id] && (
//               // <p><strong>Janitor Last Login:</strong> {loginTimes[bathroom.id]}</p>
//             )} */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Status;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Status = () => {
//   const navigate = useNavigate();
//   const HandleLogout=()=>{
//     navigate('/login')
//   }

//   // Sample data for bathrooms
//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   const handleBathroomClick = (bathroomId) => {
//     navigate(`/bathroom/${bathroomId}`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Bathroom Status</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         {bathrooms.map((bathroom) => (
//           <div
//             key={bathroom.id}
//             onClick={() => handleBathroomClick(bathroom.id)}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               padding: '10px',
//               margin: '10px',
//               width: '200px',
//               textAlign: 'center',
//               cursor: 'pointer'
//             }}
//           >
//             <h2>{bathroom.city}</h2>
//             <p>{bathroom.location}</p>
//           </div>
//         ))}
//           <button  onClick={HandleLogout}style={{ padding: '10px 20px', fontSize: '16px' }}>
//         LOGOUT
//       </button>
//       </div>
//     </div>
//   );
// };

// export default Status;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Status = () => {
//   const navigate = useNavigate();

//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   const handleBathroomClick = (bathroomId) => {
//     navigate(`/bathroom/${bathroomId}`);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Bathroom Status</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//         {bathrooms.map((bathroom) => (
//           <div
//             key={bathroom.id}
//             onClick={() => handleBathroomClick(bathroom.id)}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '5px',
//               padding: '10px',
//               margin: '10px',
//               width: '200px',
//               textAlign: 'center',
//               cursor: 'pointer'
//             }}
//           >
//             <h2>{bathroom.city}</h2>
//             <p>{bathroom.location}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Status;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Status = () => {
//   const navigate = useNavigate();

//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   const handleBathroomClick = (bathroomId) => {
//     navigate(`/bathroom/${bathroomId}`);
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       height: '100vh',
//       backgroundColor: '#ffcc00', // Deep yellow background color
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       overflow: 'hidden',
//       textAlign: 'center'
//     }}>
//       <svg style={{
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         width: '100%',
//         height: '30vh',
//         zIndex: '1'
//       }} viewBox="0 0 1440 320">
//         <path fill="#ffcc00" fillOpacity="0.8" d="M0,160L1440,160L1440,0L0,0Z"></path>
//       </svg>

//       <svg style={{
//         position: 'absolute',
//         bottom: '0',
//         left: '0',
//         width: '100%',
//         height: '30vh',
//         zIndex: '1'
//       }} viewBox="0 0 1440 320">
//         <path fill="#ffd700" fillOpacity="0.9" d="M0,320L1440,320L1440,160L0,160Z"></path>
//       </svg>

//       <div style={{
//         position: 'relative',
//         maxWidth: '800px',
//         width: '90%',
//         margin: '0 auto',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//         backgroundColor: '#fff',
//         zIndex: '2'
//       }}>
//         <h1 style={{ marginBottom: '20px', color: '#333' }}>Bathroom Status</h1>
//         <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//           {bathrooms.map((bathroom) => (
//             <div
//               key={bathroom.id}
//               onClick={() => handleBathroomClick(bathroom.id)}
//               style={{
//                 border: '1px solid #ddd',
//                 borderRadius: '8px',
//                 padding: '15px',
//                 margin: '10px',
//                 width: '200px',
//                 textAlign: 'center',
//                 cursor: 'pointer',
//                 backgroundColor: '#fff',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 zIndex: '3'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//               }}
//             >
//               <h2 style={{ margin: '0', color: '#333' }}>{bathroom.city}</h2>
//               <p style={{ margin: '5px 0', color: '#666' }}>{bathroom.location}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Status;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Status = () => {
  const navigate = useNavigate();

  const bathrooms = [
    { id: 1, city: 'New York', location: '5th Avenue' },
    { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
    { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
    { id: 4, city: 'Houston', location: 'Westheimer Road' },
    { id: 5, city: 'Phoenix', location: 'Camelback Road' },
  ];

  // const handleBathroomClick = (bathroomId) => {
  //   navigate(`/bathroom/${bathroomId}`);
  // };
  const handleBathroomClick = (bathroom) => {
    const loginTime = new Date().toLocaleString(); // Example login time
    const cleaningTime = new Date().toLocaleString(); // Example cleaning start time
    const state = {
      id: bathroom.id,
      loginTime,
      cleaningTime
    };

    navigate(`/bathroom/${bathroom.id}`, { state });
    // navigate(`/bathroom/${bathroom.id}`, {
    //   state: {
        
    //     id: bathrooms.id,
    //     loginTime,
    //     cleaningTime
    //   }
      
    // });
    // console.log(state)
  };
  

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: '#ffcc00', // Deep yellow background color
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      <svg style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '30vh',
        zIndex: '1'
      }} viewBox="0 0 1440 320">
        <path fill="#ffcc00" fillOpacity="0.8" d="M0,160L1440,160L1440,0L0,0Z"></path>
      </svg>

      <svg style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '30vh',
        zIndex: '1'
      }} viewBox="0 0 1440 320">
        <path fill="#ffd700" fillOpacity="0.9" d="M0,320L1440,320L1440,160L0,160Z"></path>
      </svg>

      <div style={{
        position: 'relative',
        maxWidth: '800px',
        width: '90%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        zIndex: '2'
      }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Bathroom Status</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {bathrooms.map((bathroom) => (
  <div
    key={bathroom.id}
    onClick={() => handleBathroomClick(bathroom)}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                margin: '10px',
                width: '200px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                zIndex: '3'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
             <h2 style={{ margin: '0', color: '#333' }}>{bathroom.city}</h2>
             <p style={{ margin: '5px 0', color: '#666' }}>{bathroom.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
