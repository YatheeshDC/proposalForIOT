// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime } = location.state || {};

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning Report</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <button onClick={() => navigate('/status')} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Back to Status</button>
//     </div>
//   );
// };

// export default Report;



// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime, endTime } = location.state || {};

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//       <h1 style={{ fontSize: '48px' }}>Cleaning Report</h1>
//       <p><strong>Janitor Last Login:</strong> {loginTime}</p>
//       <p><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//       <p><strong>End Time:</strong> {endTime}</p>
//       <button onClick={() => navigate('/status')} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Back to Status</button>
//     </div>
//   );
// };

// export default Report;




// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { loginTime, cleaningTime, endTime } = location.state || {};

//   const handleLogout = () => {
//     navigate('/login'); // Navigate to the login page
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
//         <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning Report</h1>
//         <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {loginTime}</p>
//         <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
//         <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>End Time:</strong> {endTime}</p>
//         <div style={{ marginTop: '20px' }}>
//           <button 
//             onClick={() => navigate('/status')} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#ffeb3b', // Yellow button
//               color: '#333',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               marginRight: '10px',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
//           >
//             Back to Status
//           </button>
//           <button 
//             onClick={handleLogout} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#e57373', // Red button for logout
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c62828'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Report;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [report, setReport] = useState(null);
//   const { id } = location.state || {}; // Assuming you pass the report ID in state

//   useEffect(() => {
//     console.log(`ID received:${id}`);
//     if (id) {
//       // Fetch report from backend
//       axios.get(`http://localhost:5000/api/reports/${id}`)
//         .then(response => {
//           console.log("Response data:", response.data);
//           setReport(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching report:', error);
//         });
//     }
//   }, [id]);

//   const handleLogout = () => {
//     navigate('/login'); // Navigate to the login page
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
//         <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning Report</h1>
//         {report ? (
//           <>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {report.loginTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Cleaning Start Time:</strong> {report.cleaningTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>End Time:</strong> {report.endTime}</p>
//           </>
//         ) : (
//           <p>Loading report...</p>
//         )}
//         <div style={{ marginTop: '20px' }}>
//           <button 
//             onClick={() => navigate('/status')} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#ffeb3b', // Yellow button
//               color: '#333',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               marginRight: '10px',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
//           >
//             Back to Status
//           </button>
//           <button 
//             onClick={handleLogout} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#e57373', // Red button for logout
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c62828'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Report;




// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [report, setReport] = useState(null);
//   const { id } = location.state || {}; // Assuming you pass the report ID in state

//   useEffect(() => {
//     console.log(`ID received: ${id}`);
//     if (id) {
//       // Fetch report from backend
//       axios.get(`http://localhost:5000/api/reports/${id}`)
//         .then(response => {
//           console.log("Response data:", response.data);
//           setReport(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching report:', error);
//         });
//     } else {
//       console.error('No ID provided to fetch report.');
//     }
//   }, [id]);

//   const handleLogout = () => {
//     navigate('/login'); // Navigate to the login page
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
//         <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning Report</h1>
//         {report ? (
//           <>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {report.loginTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Cleaning Start Time:</strong> {report.cleaningTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>End Time:</strong> {report.endTime}</p>
//           </>
//         ) : (
//           <p>Loading report...</p>
//         )}
//         <div style={{ marginTop: '20px' }}>
//           <button 
//             onClick={() => navigate('/status')} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#ffeb3b', // Yellow button
//               color: '#333',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               marginRight: '10px',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
//           >
//             Back to Status
//           </button>
//           <button 
//             onClick={handleLogout} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#e57373', // Red button for logout
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c62828'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Report;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [report, setReport] = useState(null);
//   const { id } = location.state || {}; // Ensure id is received
//   console.log('Location state:', location.state);
//   useEffect(() => {
//     console.log(`ID received: ${id}`);
//     if (id) {
//       // Fetch report from backend
//       axios.get(`http://localhost:5000/api/reports/${id}`)
//         .then(response => {
//           console.log("Response data:", response.data);
//           setReport(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching report:', error);
//         });
//     } else {
//       console.error('No ID provided to fetch report.');
//     }
//   }, [id]);

//   const handleLogout = () => {
//     navigate('/login'); // Navigate to the login page
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
//         <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning Report</h1>
//         {report ? (
//           <>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {report.loginTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Cleaning Start Time:</strong> {report.cleaningTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>End Time:</strong> {report.endTime}</p>
//           </>
//         ) : (
//           <p>Loading report...</p>
//         )}
//         <div style={{ marginTop: '20px' }}>
//           <button 
//             onClick={() => navigate('/status')} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#ffeb3b', // Yellow button
//               color: '#333',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               marginRight: '10px',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
//           >
//             Back to Status
//           </button>
//           <button 
//             onClick={handleLogout} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#e57373', // Red button for logout
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c62828'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Report;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Report = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [report, setReport] = useState(null);
//   const { id, loginTime, cleaningTime, endTime } = location.state || {};

//   useEffect(() => {
//     console.log(`ID received: ${id}`);
//     if (id) {
//       axios.get(`http://localhost:5000/api/reports/${id}`)
//         .then(response => {
//           console.log("Response data:", response.data);
//           setReport(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching report:', error);
//         });
//     } else {
//       console.error('No ID provided to fetch report.');
//     }
//   }, [id]);

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       height: '100vh',
//       backgroundColor: '#FFD700',
//       overflow: 'hidden',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       textAlign: 'center',
//       color: '#333'
//     }}>
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

//       <div style={{
//         position: 'relative',
//         maxWidth: '400px',
//         width: '90%',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
//         backgroundColor: '#fff',
//         zIndex: '2',
//         border: '1px solid #ddd'
//       }}>
//         <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning Report</h1>
//         {report ? (
//           <>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {report.loginTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Cleaning Start Time:</strong> {report.cleaningTime}</p>
//             <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>End Time:</strong> {report.endTime}</p>
//           </>
//         ) : (
//           <p>Loading report...</p>
//         )}
//         <div style={{ marginTop: '20px' }}>
//           <button 
//             onClick={() => navigate('/status')} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#ffeb3b',
//               color: '#333',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               marginRight: '10px',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
//           >
//             Back to Status
//           </button>
//           <button 
//             onClick={handleLogout} 
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               backgroundColor: '#e57373',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
//               transition: 'background-color 0.3s',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c62828'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Report;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Report = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [report, setReport] = useState(null);
  const { id, loginTime, cleaningTime, endTime } = location.state || {};
  useEffect(() => {
    console.log(`ID received: ${id}`);
    if (id) {
      axios.get(`http://localhost:5000/api/reports/${id}`)
        .then(response => {
          console.log("Response data:", response.data);
          setReport(response.data);
        })
        .catch(error => {
          console.error('Error fetching report:', error);
        });
    } else {
      console.error('No ID provided to fetch report.');
    }
  }, [id]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: '#FFD700',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      color: '#333'
    }}>
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

      <div style={{
        position: 'relative',
        maxWidth: '400px',
        width: '90%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        zIndex: '2',
        border: '1px solid #ddd'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Cleaning Report</h1>
        {report ? (
          <>
            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Janitor Last Login:</strong> {loginTime}</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}><strong>Cleaning Start Time:</strong> {cleaningTime}</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}><strong>End Time:</strong> {endTime}</p>
          </>
        ) : (
          <p>Loading report...</p>
        )}
        <div style={{ marginTop: '20px' }}>
          <button 
            onClick={() => navigate('/status')} 
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ffeb3b',
              color: '#333',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
              marginRight: '10px',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fbc02d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffeb3b'}
          >
            Back to Status
          </button>
          <button 
            onClick={handleLogout} 
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#e57373',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c62828'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e57373'}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;







