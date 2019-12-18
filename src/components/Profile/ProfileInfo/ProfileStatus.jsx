import React, { useState } from 'react'

const ProfileStatus = (props) => {

    // componentDidUpdate(prevProps) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    const [editStatus, setEditStatus] = useState(false)
    const [status, setStatus] = useState(props.status)

    // state = {
    //     editStatus: false,
    //     status: this.props.status
    // }

    const activeEditStatus = () => {
        setEditStatus(true)
    }

    const deactiveEditStatus = () => {
        setEditStatus(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>{editStatus
            ? <input onChange={onChangeStatus} onBlur={deactiveEditStatus} autoFocus={true} value={status} />
            : <div onClick={activeEditStatus}>{props.status || 'No status'}</div>}
        </div>
    )

}

export default ProfileStatus;