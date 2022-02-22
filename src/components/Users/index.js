import {Component} from 'react'

import {AiFillDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

import './index.css'

class Users extends Component {
  state = {
    editName: '',
    editEmail: '',
    editRole: '',
    isEditClicked: false,
  }

  onChangeUsername = event => {
    this.setState({
      editName: event.target.value,
    })
  }

  onChangeEmail = event => {
    this.setState({
      editEmail: event.target.value,
    })
  }

  onChangeRole = event => {
    this.setState({
      editRole: event.target.value,
    })
  }

  onSaveEditUser = () => {
    const {editName, editEmail, editRole} = this.state
    const {users, updateUser} = this.props
    const {id} = users
    const editedUser = {
      id,
      name: editName,
      email: editEmail,
      role: editRole,
    }

    updateUser(editedUser)
    this.setState({
      isEditClicked: false,
    })
  }

  onClickEdit = () => {
    const {users} = this.props
    const {name, email, role} = users
    this.setState(prevState => ({
      editName: name,
      editEmail: email,
      editRole: role,
      isEditClicked: !prevState.isEditClicked,
    }))
  }

  toggleCheckbox = () => {
    const {onChangeUserCheckbox, users} = this.props
    const {id} = users
    onChangeUserCheckbox(id)
  }

  onClickDelete = () => {
    const {deleteUser, users} = this.props
    const {id} = users
    deleteUser(id)
  }

  render() {
    const {editName, editEmail, editRole, isEditClicked} = this.state
    const {users} = this.props
    const {name, email, role, isChecked} = users

    return (
      <li className="user-item-list-container">
        {isEditClicked ? (
          <div className="edit-user-container">
            <input
              type="text"
              className="name-input"
              onChange={this.onChangeUsername}
              placeholder="username"
              value={editName}
            />
            <input
              type="text"
              className="email-input"
              onChange={this.onChangeEmail}
              placeholder="email"
              value={editEmail}
            />
            <input
              type="text"
              className="role-input"
              onChange={this.onChangeRole}
              placeholder="role"
              value={editRole}
            />
            <button
              type="button"
              className="save-button"
              onClick={this.onSaveEditUser}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              className="user-checkbox"
              onChange={this.toggleCheckbox}
              checked={isChecked}
            />
            <p className="user-info">{name}</p>
            <p className="user-info">{email}</p>
            <p className="user-info">{role}</p>
            <div className="edit-delate-container">
              <FiEdit className="edit-icon" onClick={this.onClickEdit} />
              <AiFillDelete
                className="delete-icon"
                onClick={this.onClickDelete}
              />
            </div>
          </div>
        )}
      </li>
    )
  }
}

export default Users
