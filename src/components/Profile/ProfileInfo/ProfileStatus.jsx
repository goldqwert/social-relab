import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editStatus: false
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
    }

    render() {
        return (
            <div>{this.state.editStatus
                ? <input onBlur={this.deactiveEditStatus} autoFocus={true} value={this.props.status} />
                : <div onClick={this.activeEditStatus}>{this.props.status}</div>}
            </div>
        )
    }
}

export default ProfileStatus;