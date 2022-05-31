import {Field, Form, Formik} from 'formik';
import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useState} from 'react';
import s from './TextArea.module.css';

export type MessageFormType = {
    newPostText: string
}

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type TextAreaPropsType = DefaultTextAreaPropsType & MessageFormType & DefaultButtonPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    // newPostText: string
    onClickCallback: () => void
    onSubmitForm?: (values: MessageFormType) => void
}

const TextArea: React.FC<TextAreaPropsType> = (props) => {
    const {
        // newPostText,
        onChange,
        // onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        onClickCallback,
        onSubmitForm,
        ...restProps
    } = props

    const [errorMsg, setErrorMsg] = useState('')

    // error message:
    const finalErrorMsg = error ? error : errorMsg
    // error span className:
    const finalSpanClassName = spanClassName ? spanClassName : `${s.error}`


    const totalBtnClassName =  'common_btn'

    const onClickBtnHandler = () => {
        // const trimmedText = newPostText.trim()
        //
        // if (trimmedText === '') {
        //     setErrorMsg('Error! Need to write something')
        // }
        // else {
        //     onClickCallback()
        //     setErrorMsg('')
        // }
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setErrorMsg('')
        onChange && onChange(e)
        //
        // onChangeText && onChangeText(e.currentTarget.value)
    }

    function validateField(value: string) {
        let error = ''

        if (!value) {
            error = 'Required'
        }

        return error
    }


    return (
        // <div className={s.wrapper}>
        //     <textarea
        //         value={newPostText}
        //         placeholder={'write new post'}
        //         className={s.textarea}
        //         onChange={onChangeTextareaHandler}
        //         // onKeyPress={onKeyPressHandler}
        //
        //         {...restProps}
        //     />
        //     <div className={s.error_wrapper}>
        //         <div className={s.error_container}>
        //             {finalErrorMsg && <span className={finalSpanClassName}>{errorMsg}</span>}
        //         </div>
        //         <button
        //             onClick={ onClickBtnHandler }
        //             className={totalBtnClassName}
        //         >
        //             Add
        //         </button>
        //     </div>
        // </div>



        <Formik
            initialValues={{
                newPostText: ''
            }}
            onSubmit={values => onSubmitForm ? onSubmitForm(values) : onClickBtnHandler()}
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