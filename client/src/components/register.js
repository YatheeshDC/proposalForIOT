// import React, { useState } from 'react';
// import AuthService from './AuthService';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await AuthService.register(username, password);
//       Swal.fire({
//         title: 'Success!',
//         text: 'Registration successful',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         navigate('/login'); // Redirect to login on successful registration
//       });
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Registration failed',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div style={{
//       backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsU41Y0jOw3lttMu4TCEaadptaCSqgDtg3aA&s")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       color: '#fff',
//       textAlign: 'center'
//     }}>
//       <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ marginBottom: '5px', color: '#fff' }}>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ marginBottom: '5px', color: '#fff' }}>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import AuthService from './AuthService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(username, password, name); // Pass name to AuthService
      Swal.fire({
        title: 'Success!',
        text: 'Registration successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login'); // Redirect to login on successful registration
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Registration failed',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: '#f9f8e9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <svg style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '50%',
        zIndex: '1'
      }} viewBox="0 0 1440 320">
        <path fill="#FFD700" fillOpacity="1" d="M0,320L1440,320L1440,160C1200,200,960,250,720,240C480,230,240,180,0,160Z"></path>
      </svg>

      <div style={{
        position: 'relative',
        maxWidth: '320px', // Reduced maxWidth
        width: '90%',
        margin: 'auto',
        padding: '20px', // Reduced padding
        border: '1px solid #ddd',
        borderRadius: '8px', // Slightly reduced border radius
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        zIndex: '2'
      }}>
        <h2 style={{ marginBottom: '15px', color: '#000000', fontSize: '20px' }}>Register</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold', color: '#333' }}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold', color: '#333' }}>Email:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold', color: '#333' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            fontSize: '14px',
            backgroundColor: '#FFD700',
            color: '#000000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s'
          }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
