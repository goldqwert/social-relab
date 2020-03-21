import React, { useState, useEffect, ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string,
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: PropsType) => {

    const [editStatus, setEditStatus] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditStatus = () => {
        setEditStatus(true)
    }

    const deactiveEditStatus = () => {
        setEditStatus(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>{editStatus
            ? <div><b>status: </b><input onChange={onChangeStatus} onBlur={deactiveEditStatus} autoFocus={true} value={status} /></div>
            : <div className={s.status} onClick={activeEditStatus}><b>status: </b>{props.status || 'No status'}</div>}
        </div>
    )
}

export default ProfileStatus;