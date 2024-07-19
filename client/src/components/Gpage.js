// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const PasswordPrompt = () => {
//   const navigate = useNavigate();
//   const correctPassword = '12345'; // Replace with your actual password

//   const showPasswordPrompt = () => {
//     Swal.fire({
//       title: 'Enter Password',
//       input: 'password',
//       inputAttributes: {
//         autocapitalize: 'off',
//         autocorrect: 'off',
//         required: 'true'
//       },
//       showCancelButton: true,
//       confirmButtonText: 'Submit',
//       showLoaderOnConfirm: true,
//       preConfirm: (password) => {
//         return new Promise((resolve, reject) => {
//           if (password === correctPassword) {
//             resolve();
//           } else {
//             Swal.showValidationMessage('Incorrect password');
//             reject(new Error('Incorrect password'));
//           }
//         });
//       },
//       allowOutsideClick: () => !Swal.isLoading()
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Password matched',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }).then(() => {
//           navigate('/status'); // Redirect to another page upon successful match
//         });
//       }
//     });
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <button onClick={showPasswordPrompt} style={{ padding: '10px 20px', fontSize: '16px' }}>
//         Enter Password
//       </button>
//     </div>
//   );
// };

// export default PasswordPrompt;


// import React from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const PasswordPrompt = () => {
//   const navigate = useNavigate();
//   const correctPassword = '12345'; // Replace with your actual password

//   const showPasswordPrompt = () => {
//     Swal.fire({
//       title: 'Enter Password',
//       input: 'password',
//       inputAttributes: {
//         autocapitalize: 'off',
//         autocorrect: 'off',
//         required: 'true'
//       },
//       showCancelButton: true,
//       confirmButtonText: 'Submit',
//       showLoaderOnConfirm: true,
//       preConfirm: (password) => {
//         return new Promise((resolve, reject) => {
//           if (password === correctPassword) {
//             resolve();
//           } else {
//             Swal.showValidationMessage('Incorrect password');
//             reject(new Error('Incorrect password'));
//           }
//         });
//       },
//       allowOutsideClick: () => !Swal.isLoading()
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Password matched',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }).then(() => {
//           navigate('/status'); // Redirect to another page upon successful match
//         });
//       }
//     });
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <button onClick={showPasswordPrompt} style={{ padding: '10px 20px', fontSize: '16px' }}>
//         Enter Password
//       </button>
//     </div>
//   );
// };

// export default PasswordPrompt;

import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PasswordPrompt = () => {
  const navigate = useNavigate();
  const correctPassword = '12345'; // Replace with your actual password

  const showPasswordPrompt = () => {
    Swal.fire({
      title: 'Enter Password',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off',
        autocorrect: 'off',
        required: 'true'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (password) => {
        return new Promise((resolve, reject) => {
          if (password === correctPassword) {
            resolve();
          } else {
            Swal.showValidationMessage('Incorrect password');
            reject(new Error('Incorrect password'));
          }
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'Password matched',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/status'); // Redirect to another page upon successful match
        });
      }
    });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#FFD700', // Deep yellow background color
      transition: 'background-color 1s ease-in-out',
      color: 'white'
    }}>
      <button onClick={showPasswordPrompt} style={{
        padding: '15px 30px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: 'rgb(0, 0, 0)',
        color: '#FFD700',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s, transform 0.3s'
      }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(26, 0, 0)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 0, 0)'}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Enter the Genitor id
      </button>
    </div>
  );
};

export default PasswordPrompt;
