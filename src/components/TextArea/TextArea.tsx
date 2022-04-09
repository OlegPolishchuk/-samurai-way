import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useState} from 'react';
import s from './TextArea.module.css';
import {ActionsTypes, addPostAC, updateNewPostTextAC} from "../../redux/state";

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type TextAreaPropsType = DefaultTextAreaPropsType & DefaultButtonPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    newPostText: string
    onClickCallback: () => void
}

const TextArea: React.FC<TextAreaPropsType> = (props) => {
    const {
        newPostText,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        onClickCallback,
        ...restProps
    } = props

    const [errorMsg, setErrorMsg] = useState('')

    // error message:
    const finalErrorMsg = error ? error : errorMsg
    // error span className:
    const finalSpanClassName = spanClassName ? spanClassName : `${s.error}`


    const totalClassName =  'common_btn'

    const onClickBtnHandler = () => {
        const trimmedText = newPostText.trim()

        if (trimmedText === '') {
            setErrorMsg('Error! Need to write something')
        }
        else {
            onClickCallback()
            setErrorMsg('')
        }
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setErrorMsg('')
        onChange && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }

    return (
        <div className={s.wrapper}>
            <textarea
                value={newPostText}
                placeholder={'write new post'}
                className={s.textarea}
                onChange={onChangeTextareaHandler}

                {...restProps}
            />
            <div>
                {finalErrorMsg && <span className={finalSpanClassName}>{errorMsg}</span>}
                <button
                    onClick={ onClickBtnHandler }
                    className={totalClassName}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default TextArea;