import {Field, Form, Formik} from 'formik';
import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useState} from 'react';
import s from './TextArea.module.css';

export type MessageFormType = {
    newPostText: string
}

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type TextAreaPropsType = DefaultTextAreaPropsType & MessageFormType & DefaultButtonPropsType & {
    onEnter?: () => void
    error?: string
    spanClassName?: string
    onSubmitForm?: (values: MessageFormType) => void
}

const TextArea: React.FC<TextAreaPropsType> = (props) => {
    const {
        onChange,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        onSubmitForm,
        ...restProps
    } = props

    const [errorMsg, setErrorMsg] = useState('')

    // error message:
    const finalErrorMsg = error ? error : errorMsg
    // error span className:
    const finalSpanClassName = spanClassName ? spanClassName : `${s.error}`


    const totalBtnClassName =  'common_btn'

    function validateField(value: string) {
        let error = ''

        if (!value) {
            error = 'Required'
        }

        return error
    }


    return (
        <Formik
            initialValues={{
                newPostText: ''
            }}
            onSubmit={values => onSubmitForm && onSubmitForm(values)}
        >
            {({errors, touched, isValidating}) => (
                <Form className={s.wrapper}>
                   <label>
                       <Field
                           className={s.textarea}
                           type={'textArea'}
                           name={'newPostText'}
                           placeholder={'new text...'}
                           validate={validateField}
                       />
                       {errors.newPostText && touched.newPostText && <div>{errors.newPostText}</div>}
                   </label>
                    <button className={totalBtnClassName} type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    );
};

export default TextArea;