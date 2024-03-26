import React from 'react'

 function MyUser(props) {

    console.log(props);
  return (
    <div>MyUser</div>
  )
}

export default React.memo(MyUser);
