import React, { Component } from 'react';

// function getFullName(firstName,lastName){
//   return firstName + ' ' + lastName
// }

// const App = () =>{
//    const firstName = "Anh Ngoc"
//    const lastName = "Nguyen"
   
//    const css = {
//     backgroundColor: "Blue",
//     color: "red",
//     padding: 8,
//     margin: '20px 0',
//     fontSize: 40,
//     fontFamily: 'sansSerif'
//    }

//    const element = 
//    <div style={css}>Hello {getFullName(firstName,lastName)}</div>

//    const welcome = <div>welcome message: {element}</div>

//    return welcome
// }
// export default App;

// const user = {
//   firstName: 'Anh Ngoc',
//   lastName: 'Nguyen',
//   email: 'angoc6462@gmail.com'
// }

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName
}

// const User = () => {
//   const element = (
//     <div>
//       <div style={{fontSize:22}}>
//         {getFullName(user.firstName,user.lastName)}
//       </div>
//       <div>{user.email}</div>
//     </div>
//   )
//   return element
// }
// export default User;

function User(props){
  const user = props.user

  const element = (
    <div>
      <div style={{fontSize:22}}>
        {getFullName(user.firstName,user.lastName)}
      </div>
      <div style={{color:'grey'}}>
        {user.email ? user.email : <i>Khong co dia chi email</i>} 
        {/* {user.email || <i>Khong co dia chi email</i>} */}
      </div>
    </div>
  )
  return element
}

function App() {
  const element = users.map(user => {
    return <User
      user = {user}
     /> 
  })
  return element
}

const users = [
  {
    firstName: 'Dương',
    lastName: 'Đỗ',
    email: 'duong@targeek.io'
  },
  {
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'real.donaldtrump@us.gov'
  },
  {
    firstName: 'Công Phượng',
    lastName: 'Nguyễn',
  },
  {
    firstName: 'Công Phượng',
    lastName: 'Nguyễn',
    email: 'phuong@gmail.com'
  }
]

export default App;