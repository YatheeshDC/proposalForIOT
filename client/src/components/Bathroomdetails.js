// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const BathroomDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Fetch the bathroom details using the id
//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   const bathroom = bathrooms.find(bathroom => bathroom.id === parseInt(id));

//   const [loginTime, setLoginTime] = useState(new Date().toLocaleString());
//   const [cleaningStatus, setCleaningStatus] = useState('');

//   const handleTrueClick = () => {
//     Swal.fire({
//       title: 'Alert',
//       text: 'Someone is there',
//       icon: 'info',
//       confirmButtonText: 'OK'
//     });
//   };

//   const handleFalseClick = () => {
//     const cleaningTime = new Date().toLocaleString();
//     Swal.fire({
//       title: 'Alert',
//       text: 'No one occupies',
//       icon: 'info',
//       confirmButtonText: 'Start Cleaning'
//     }).then(() => {
//       setCleaningStatus('Cleaning in Progress');
//       navigate(`/clean/${id}`, { state: { loginTime, cleaningTime } }); // Navigate to the cleaning page with state

//     });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Bathroom Detail</h1>
//       {bathroom ? (
//         <div style={{ textAlign: 'center' }}>
//           <h2>{bathroom.city}</h2>
//           <p>{bathroom.location}</p>
//           <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//           <p>{cleaningStatus}</p>
//           <div style={{ margin: '10px' }}>
//             <button onClick={handleTrueClick} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}>True</button>
//             <button onClick={handleFalseClick} style={{ padding: '10px 20px', fontSize: '16px' }}>False</button>
//           </div>
//         </div>
//       ) : (
//         <p>Bathroom not found</p>
//       )}
//     </div>
//   );
// };

// export default BathroomDetail;




// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const BathroomDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const bathrooms = [
//     { id: 1, city: 'New York', location: '5th Avenue' },
//     { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
//     { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
//     { id: 4, city: 'Houston', location: 'Westheimer Road' },
//     { id: 5, city: 'Phoenix', location: 'Camelback Road' },
//   ];

//   const bathroom = bathrooms.find(bathroom => bathroom.id === parseInt(id));

//   const [loginTime, setLoginTime] = useState(new Date().toLocaleString());
//   const [cleaningStatus, setCleaningStatus] = useState('');

//   const handleTrueClick = () => {
//     Swal.fire({
//       title: 'Alert',
//       text: 'Someone is there',
//       icon: 'info',
//       confirmButtonText: 'OK'
//     });
//   };

//   const handleFalseClick = () => {
//     const cleaningTime = new Date().toLocaleString();
//     Swal.fire({
//       title: 'Alert',
//       text: 'No one occupies',
//       icon: 'info',
//       confirmButtonText: 'Start Cleaning'
//     }).then(() => {
//       setCleaningStatus('Cleaning in Progress');
//       navigate(`/clean/${id}`, { state: { loginTime, cleaningTime } }); // Navigate to the CleaningInProgress page with state
//     });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center' }}>Bathroom Detail</h1>
//       {bathroom ? (
//         <div style={{ textAlign: 'center' }}>
//           <h2>{bathroom.city}</h2>
//           <p>{bathroom.location}</p>
//           <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//           <p>{cleaningStatus}</p>
//           <div style={{ margin: '10px' }}>
//             <button onClick={handleTrueClick} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}>True</button>
//             <button onClick={handleFalseClick} style={{ padding: '10px 20px', fontSize: '16px' }}>False</button>
//           </div>
//         </div>
//       ) : (
//         <p>Bathroom not found</p>
//       )}
//     </div>
//   );
// };

// export default BathroomDetail;



import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BathroomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bathrooms = [
    { id: 1, city: 'New York', location: '5th Avenue' },
    { id: 2, city: 'Los Angeles', location: 'Sunset Boulevard' },
    { id: 3, city: 'Chicago', location: 'Michigan Avenue' },
    { id: 4, city: 'Houston', location: 'Westheimer Road' },
    { id: 5, city: 'Phoenix', location: 'Camelback Road' },
  ];

  const bathroom = bathrooms.find(bathroom => bathroom.id === parseInt(id));

  const [loginTime, setLoginTime] = useState(new Date().toLocaleString());
  const [cleaningStatus, setCleaningStatus] = useState('');

  const handleTrueClick = () => {
    Swal.fire({
      title: 'Alert',
      text: 'Someone is there',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  const handleFalseClick = () => {
    const cleaningTime = new Date().toLocaleString();
    Swal.fire({
      title: 'Alert',
      text: 'No one occupies',
      icon: 'info',
      confirmButtonText: 'Start Cleaning'
    }).then(() => {
      setCleaningStatus('Cleaning in Progress');
      navigate(`/clean/${id}`, { state: { loginTime, cleaningTime } }); // Navigate to the CleaningInProgress page with state
    });
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: '#FFD700', // Full yellow background
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#333',
    }}>
      {/* Top Curve Decoration */}
      <svg style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '15vh',
        zIndex: '1',
      }} viewBox="0 0 1440 320">
        <path fill="#FFD700" d="M0,0C200,50 400,-50 600,0C800,50 1000,-50 1200,0C1400,50 1600,0 1600,0L1600,80L0,80Z"></path>
      </svg>

      {/* Bottom Curve Decoration */}
      <svg style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '20vh',
        zIndex: '1',
      }} viewBox="0 0 1440 320">
        <path fill="#FFD700" d="M0,160C200,220 400,160 600,160C800,160 1000,220 1200,160C1400,100 1600,160 1600,160L1600,320L0,320Z"></path>
      </svg>

      {/* Main Content Area */}
      <div style={{
        position: 'relative',
        maxWidth: '400px',
        width: '90%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff', // White background for the content area
        zIndex: '2',
        border: '1px solid #ddd'
      }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Bathroom Detail</h1>
        {bathroom ? (
          <div>
            <h2 style={{ margin: '10px 0', color: '#333' }}>{bathroom.city}</h2>
            <p style={{ margin: '10px 0', color: '#666' }}>{bathroom.location}</p>
            <p style={{ margin: '10px 0', color: '#888' }}><strong>Janitor Last Login:</strong> {loginTime}</p>
            <p style={{ margin: '10px 0', color: '#ff9800' }}>{cleaningStatus}</p>
            <div style={{ margin: '10px' }}>
              <button 
                onClick={handleTrueClick} 
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  marginRight: '10px',
                  backgroundColor: '#ffeb3b', // Yellow button
                  color: '#333',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
              >
                True
              </button>
              <button 
                onClick={handleFalseClick} 
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#ff5722', // Orange button
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e64a19'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
              >
                False
              </button>
            </div>
          </div>
        ) : (
          <p>Bathroom not found</p>
        )}
      </div>
    </div>
  );
};

export default BathroomDetail;
