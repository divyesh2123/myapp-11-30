import React from 'react'

 function MyUser(props) {

    console.log(props);
  return (
    <div>
        {
           props.data.map((v,index)=>{

           return (<div>{v} <button onClick={()=>{
              props.remove(index);
            }}>delete</button></div>)

           })
        }

    </div>
  )
}

export default React.memo(MyUser);
