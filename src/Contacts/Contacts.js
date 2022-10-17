import React from 'react';
import s from './Contacts.module.scss'
import HeaderTitle from "../common/components/HeaderTitle";
import {Zoom} from "react-awesome-reveal";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';

export const Contacts = () => {
    // const templateParams = {
    //     name: '',
    //     email: '',
    //     messages:'',
    // };


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            messages: '',
        },
        validate: values => {
            let errors = {}
            if (values.email === '') {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.name < 2) {
                errors.name = 'Incorrect name'
            }
            if (values.messages === '') {
                errors.messages = 'Please write a message'
            }
            return errors
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            emailjs.send('service_rwe47k2', 'template_0bqp1k9', values, 'mKFoN5cse6LhizICK')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...', err);
                });

            formik.resetForm()
        },
    });
    return (
        <div id='contacts' className={s.mainBlock}>
            <Zoom className={s.content}>
                <div className={s.content}>
                    <HeaderTitle title={'Contacts'}/>
                    <form id='#myForm' onSubmit={formik.handleSubmit} className={s.formContacts}>
                        <input name="name" placeholder='Your Name' type="text" {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name ?
                            <div className={s.errorText}>{formik.errors.name}</div> :
                            <br/>}
                        <input name="email" placeholder='Your Email' type="email" {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email ?
                            <div className={s.errorText}>{formik.errors.email}</div> :
                            <br/>}
                        <textarea name="messages"
                                  placeholder='Your Message' {...formik.getFieldProps('messages')}></textarea>
                        {formik.touched.messages && formik.errors.messages ?
                            <div className={s.errorText}>{formik.errors.messages}</div> :
                            <br/>}
                        <button type="submit" className={s.buttonSubmit}>Submit</button>
                    </form>
                </div>
            </Zoom>
        </div>

    );
};

