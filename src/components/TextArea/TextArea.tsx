import React, {ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes,KeyboardEvent, useState} from 'react';
import s from './TextArea.module.css';

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


    const totalBtnClassName =  'common_btn'

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

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     // need to fix it
    //     // onKeyPress && onKeyPress(e)
    //     // onEnter && e.key === 'Enter' && onEnter()
    //     if (e.key === 'Enter') {
    //         console.log('')
    //         onClickBtnHandler()
    //     }
    // }

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
                // onKeyPress={onKeyPressHandler}

                {...restProps}
            />
            <div className={s.error_wrapper}>
                <div className={s.error_container}>
                    {finalErrorMsg && <span className={finalSpanClassName}>{errorMsg}</span>}
                </div>
                <button
                    onClick={ onClickBtnHandler }
                    className={totalBtnClassName}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default TextArea;