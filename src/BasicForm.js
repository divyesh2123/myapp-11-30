import { useFormik } from 'formik'
import React from 'react'

export default function BasicForm() {

   const  formik = useFormik({
        initialValues : {
            email: "op@rfddd.com",
            password: ""
        },
        onSubmit : val =>{

            console.log(val);
        }
    })
  return (
    <form onSubmit={formik.handleSubmit} autoComplete='false'>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         autoComplete='false'
       />

<label htmlFor="email">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         autoComplete='false'
       />
 
       <button type="submit">Submit</button>
     </form>
  )
}
