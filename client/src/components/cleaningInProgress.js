// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();

//   const handleCleaningComplete = () => {
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/status'); // Navigate back to the status page
//     });
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
//       <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
//     </div>
//   );
// };

// export default CleaningInProgress;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime } = location.state || {};

//   const handleCleaningComplete = () => {
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/report'); // Navigate back to the report page
//     });
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
//     </div>
//   );
// };

// export default CleaningInProgress;





// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime } = location.state || {};

//   const handleCleaningComplete = () => {
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/report', { state: { loginTime, cleaningTime } }); // Navigate to the report page with state
//     });
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
//     </div>
//   );
// };

// export default CleaningInProgress;





// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime } = location.state || {};

//   const handleCleaningComplete = () => {
//     const endTime = new Date().toLocaleString();
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/report', { state: { loginTime, cleaningTime, endTime } }); // Navigate to the report page with state
//     });
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
//     </div>
//   );
// };

// export default CleaningInProgress;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime } = location.state || {};

//   const handleCleaningComplete = () => {
//     const endTime = new Date().toLocaleString();
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/report', { state: { loginTime, cleaningTime, endTime } }); // Navigate to the report page with state
//     });
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       height: '100vh',
//       backgroundColor: '#FFD700', // Full yellow background
//       overflow: 'hidden',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       textAlign: 'center',
//       color: '#333'
//     }}>
//       {/* Top Curve Decoration */}
//       <svg style={{
//         position: 'absolute',
//         top: '0',
//         left: '0',
//         width: '100%',
//         height: '15vh',
//         zIndex: '1',
//       }} viewBox="0 0 1440 320">
//         <path fill="#FFD700" d="M0,0C200,50 400,-50 600,0C800,50 1000,-50 1200,0C1400,50 1600,0 1600,0L1600,80L0,80Z"></path>
//       </svg>

//       {/* Bottom Curve Decoration */}
//       <svg style={{
//         position: 'absolute',
//         bottom: '0',
//         left: '0',
//         width: '100%',
//         height: '20vh',
//         zIndex: '1',
//       }} viewBox="0 0 1440 320">
//         <path fill="#FFD700" d="M0,160C200,220 400,160 600,160C800,160 1000,220 1200,160C1400,100 1600,160 1600,160L1600,320L0,320Z"></path>
//       </svg>

//       {/* Main Content Area */}
//       <div style={{
//         position: 'relative',
//         maxWidth: '400px',
//         width: '90%',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//         backgroundColor: '#fff', // White background for the content area
//         zIndex: '2',
//         border: '1px solid #ddd'
//       }}>
//         <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning in Progress</h1>
//         <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {loginTime}</p>
//         <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//         <button 
//           onClick={handleCleaningComplete} 
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: '#ffeb3b', // Yellow button
//             color: '#333',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//             transition: 'background-color 0.3s',
//             marginTop: '20px'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
//           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
//         >
//           Cleaning is Complete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CleaningInProgress;






// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime, id } = location.state || {}; // Ensure id is passed

//   const handleCleaningComplete = () => {
//     const endTime = new Date().toLocaleString();
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/report', { state: { loginTime, cleaningTime, endTime, id } }); // Pass id to report
//     });
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
//     </div>
//   );
// };

// export default CleaningInProgress;



// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const CleaningInProgress = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime, id } = location.state || {}; // Ensure id is passed

//   const handleCleaningComplete = () => {
//     const endTime = new Date().toLocaleString();
//     Swal.fire({
//       title: 'Success',
//       text: 'Cleaning is complete',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     }).then(() => {
//       navigate('/report', { state: { loginTime, cleaningTime, endTime, id } }); // Pass id to report
//     });
//   };
  

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
//     </div>
//   );
// };

// export default CleaningInProgress;
import React from 'react';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const CleaningInProgress = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { loginTime, cleaningTime } = location.state || {};
  const handleCleaningComplete = () => {
    const endTime = new Date().toLocaleString();
    const state = { loginTime, cleaningTime, endTime, id };
    console.log("hai",location)

    console.log('State object:', state); // Log the state object

    Swal.fire({
      title: 'Success',
      text: 'Cleaning is complete',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      navigate('/report', { state });
    });
  };
  return (
    <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '48px' }}>Cleaning in Progress</h1>
      <p><strong>Janitor Last Login:</strong> {loginTime}</p>
      <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
      <button onClick={handleCleaningComplete} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Cleaning is Complete</button>
    </div>
  );
};

export default CleaningInProgress;




