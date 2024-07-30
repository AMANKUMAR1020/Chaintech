import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Profile() {
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.user); // fetch data from userSlice
  console.log(user)

  let result = null;
  if (user) {
    result = (
      <div className="show">
        <p className='data'>id: {user.id}</p>
        <p className='data'>name: {user.name}</p>
        <p className='data'>username: {user.username}</p>
        <p className='data'>password: {user.password}</p>
        <p className='data'>Admin: {user.Admin ? "true" : "false"}</p>

        <div className='btn-div'>
          <button className='btn1' onClick={() => navigate('/edit')}>Edit</button>
          <button className='btn1' onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    );
  } else {
    result = <div>{"There is some error that occurred. Please try again :)"}</div>;
  }

  return result;
}














// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch,useSelector } from "react-redux";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// export default function Profile(){

//   const navigate = useNavigate();

//   const { user } = useSelector((state) => state.user);

//   let result;

//   if(user !== null || user !== undefined){
//     result = ()=>{
//         return(<>
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3"  controlId="formBasicEmail">
//         <Form.Label>Name:</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="name"
//           value={name}
//           aria-label="Disabled input example"
//           disabled
//           readOnly
//           />
//       </Form.Group>

//       <Form.Group className="mb-3"  controlId="formBasicEmail">
//         <Form.Label>Email:</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="email"
//           value={email}
//           aria-label="Disabled input example"
//           disabled
//           readOnly
//           />
//       </Form.Group>

//       <Form.Group className="mb-3"  controlId="formBasicEmail">
//         <Form.Label>Email:</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="email"
//           value={email}
//           aria-label="Disabled input example"
//           disabled
//           readOnly
//           />
//       </Form.Group>

//       <Form.Group className="mb-3"  controlId="formBasicEmail">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Usersname"
//           value={username}
//           aria-label="Disabled input example"
//           disabled
//           readOnly
//           />
//       </Form.Group>


//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           aria-label="Disabled input example"
//           disabled
//           readOnly
//           />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Label>Admin:</Form.Label>
//         <Form.Check type="checkbox" label="Check me out" 
//           value={admin}
//           aria-label="Disabled input example"
//           disabled
//           readOnly
//           />
//       </Form.Group>

//       <Form.Text className="text-muted">{error}</Form.Text>

//       <Button variant="primary" onClick={()=>navigate('/edit')}>
//         Edit
//       </Button>

//       <Button variant="primary" onClick={()=>navigate(-1)}>
//         Back
//       </Button>

//     </Form>
//         </>)
//       }
//   }
//   else{
//     result  = ()=>{
//         return(<>
//         <div>There is some error is occure please try again :)</div>
//         </>)
//       }
//   }

//   return result
// };














// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch,useSelector } from "react-redux";

// export default function Profile(){

//   const navigate = useNavigate();

//   const { user } = useSelector((state) => state.user);

//   let result;
  
//   if(user !== null || user !== undefined){
//     result = ()=>{
//         return(<>
//         <div>{user}</div>
          
//           <button onClick={()=>navigate('/edit')}>Edit</button>
//           <button onClick={()=>navigate(-1)}>Back</button>
          
//         </>)
//       }
//   }
//   else{
//     result  = ()=>{
//         return(<>
//         <div>There is some error is occure please try again :)</div>
//         </>)
//       }
//   }

//   return result
// };
