import React from 'react'
import { Formik } from 'formik';

export default () => (
    <div>
        <h1>Auth</h1>
        <Formik
            initialValues={{email: ''}}
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
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                {status && status.msg && <div>{status.msg}</div>}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
            )}
        />
    </div>
)