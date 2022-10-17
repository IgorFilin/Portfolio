import React, {useState} from 'react';
import s from './Contacts.module.scss'
import HeaderTitle from "../common/components/HeaderTitle";
import {Zoom} from "react-awesome-reveal";
import {useFormik} from "formik";
import emailjs from '@emailjs/browser';
import {Alert, Backdrop, CircularProgress, Snackbar} from "@mui/material";

export const Contacts = () => {
    const [open, setOpen] = useState(true);
    const [openAlert, setOpenAlert] = useState(false);
    const [StatusAlert, setStatusAlert] = useState(null);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            debugger
            return
        }
        setOpenAlert(false)

    };


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
            setOpen(false)
            emailjs.send('service_rwe47k2', 'template_0bqp1k9', values, 'mKFoN5cse6LhizICK')
                .then((response) => {
                    setStatusAlert('success')
                    setOpenAlert(true)
                })
                .catch((err) => {
                    setStatusAlert('error')
                    setOpenAlert(true)
                })
                .finally(() => {
                    setOpen(true)
                })

            formik.resetForm()
        },
    });

    return (
        <div id='contacts' className={s.mainBlock}>
            <Snackbar anchorOrigin={{horizontal: 'left', vertical: 'bottom'}} open={openAlert} autoHideDuration={3000}
                      onClose={handleClose}>
                <Alert variant={"filled"} onClose={handleClose}
                       severity={StatusAlert === "success" ? "success" : "error"}>
                    {StatusAlert === "success" ? 'Thank you, your letter has been delivered!' : 'Sorry there was an error, please try again'}
                </Alert>
            </Snackbar>
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
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={!open}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>

    );
};

