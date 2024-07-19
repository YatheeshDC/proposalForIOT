// // client/src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ setToken }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', {
//         username,
//         password,
//       });
//       setToken(response.data.token);
//     } catch (error) {
//       console.error('Invalid Credentials');
//     }
//   };

// import React, { useState } from 'react';
// import AuthService from './AuthService';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
      
//       await AuthService.login(email, password);
//       Swal.fire({
//         title: 'Success!',
//         text: 'Login successful',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         navigate('/status'); // Redirect on successful login
//       });
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Login failed',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };



  

//   return (
//     <div style={{
//       position: 'relative',
//       height: '100vh',
//       backgroundColor: '#f9f8e9',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       textAlign: 'center'
//     }}>
    
//       <svg style={{
//         position: 'absolute',
//         bottom: '0',
//         width: '100%',
//         height: '100%'  /* Ensure it covers the entire bottom area */
//       }} viewBox="0 0 1440 320">
//         <path fill="#FFD700" fillOpacity="1" d="M0,320L1440,320L1440,240C1350,270,1260,290,1152,270C1050,250,960,180,864,160C768,140,672,120,576,140C480,160,384,200,288,210C192,220,96,220,0,240Z"></path>
//       </svg>
    

//     <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', zIndex:'2' }}>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ marginBottom: '5px' }}>Email:</label><br></br>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label style={{ marginBottom: '5px' }}>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Login</button>
//       </form>
     
//       <p style={{ marginTop: '10px', textAlign: 'center' }}>Don't have an account? <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>Register</Link></p>
//       <p style={{ marginTop: '10px', textAlign: 'center' }}> Are You A Genitor?<Link to="/Gpage" style={{ color: '#007bff', textDecoration: 'none' }}>CLICK HERE</Link></p>
   
//     </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import AuthService from './AuthService';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/status'); // Redirect on successful login
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Login failed',
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
        height: '50vh',
        zIndex: '1'
      }} viewBox="0 0 1440 320">
        <path fill="#FFD700" fillOpacity="1" d="M0,320L1440,320L1440,240C1350,270,1260,290,1152,270C1050,250,960,180,864,160C768,140,672,120,576,140C480,160,384,200,288,210C192,220,96,220,0,240Z"></path>
      </svg>

      <div style={{
        position: 'relative',
        maxWidth: '400px',
        width: '90%',
        margin: 'auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        zIndex: '2'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginBottom: '5px', display: 'block', fontWeight: 'bold' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            backgroundColor: '#FFD700',
            color: '#000000',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s'
          }}>Login</button>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
          Don't have an account? <Link to="/register" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
        </p>
        <p style={{ marginTop: '10px', textAlign: 'center', color: '#555' }}>
          Are you a janitor? <Link to="/Gpage" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>CLICK HERE</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
