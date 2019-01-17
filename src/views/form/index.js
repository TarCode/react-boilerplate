import React from 'react'
import { Formik } from 'formik';

export default () => (
    <div>
        <h1>Form</h1>
        <Formik
            initialValues={{name: ''}}
            onSubmit={(values, actions) => {
            console.log("VALUES", values)
            setTimeout(() => {
                actions.setSubmitting(false);
                // actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                actions.setStatus({ msg: 'Form successfully simulated' });
            }, 2000)
            }}
            render={({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            }) => (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                {errors.name && touched.name && <div>{errors.name}</div>}
                {status && status.msg && <div>{status.msg}</div>}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
            )}
        />
    </div>
)