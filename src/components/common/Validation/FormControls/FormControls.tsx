import React from "react";
import s from './FormControls.module.css'

type PropsType = {
    input: any
    meta: any
    child: Object
}

const FormControl: React.FC<PropsType> = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            <div className={s.errors}>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}
export const Textarea = (props: PropsType) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props: PropsType) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
} 