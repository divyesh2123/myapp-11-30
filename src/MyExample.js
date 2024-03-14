import { Formik } from 'formik'
import React from 'react'
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup'
export default function MyExample() {

    const validationSchema1 =()=> {
        return Yup.object().shape({
            lastName: Yup.string().required('lastName is required'),
         
            
         
              
       
        });
      }

  return (
    <>
        <Formik
        
        onSubmit={console.log}
        initialValues={{
            lastName: '',
           

        }}

        validationSchema={validationSchema1 }
        >

            {
                ({


                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors



                })=>(<>

              

                <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" 
        
        name='lastName'
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
    isInvalid={touched.lastName && errors.lastName}
    
        />
      </Form.Group>

      { (touched.lastName && errors.lastName) &&
      (<span>{errors.lastName}</span>)}
     
     <input type="submit" value="save"/>
    </Form>
                
                </>)
            }



        </Formik>
    
    
    </>
  )
}
