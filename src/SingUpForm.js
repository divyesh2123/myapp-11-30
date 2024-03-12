import { Field, Form, Formik } from 'formik'
import React from 'react'

export default function SingUpForm() {
  return (
    <Formik initialValues={ 

        {
            firstName : "",
            lastName : ""
        }

    
    }
    onSubmit={ (values)=>{

        console.log(values);
    }}
    
    >

<Form>
<Field name="firstName" type="text" className="form-control" />
<Field name="lastName" type="text" className="form-control" />

<input type='submit' value="save" />
    </Form>

    </Formik>
  )
}
