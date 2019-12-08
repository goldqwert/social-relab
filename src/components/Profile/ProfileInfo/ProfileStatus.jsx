import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editStatus: false,
        status: this.props.status
    }

    activeEditStatus = () => {
        this.setState({
            editStatus: true
        })
    }

    deactiveEditStatus = () => {
        this.setState({
            editStatus: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>{this.state.editStatus
                ? <input onChange={this.onChangeStatus} onBlur={this.deactiveEditStatus} autoFocus={true} value={this.state.status} />
                : <div onClick={this.activeEditStatus}>{this.props.status || 'No status'}</div>}
            </div>
        )
    }
}

export default ProfileStatus;