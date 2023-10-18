import { FaRegTrashCan } from 'react-icons/fa6'
import styles from './UsersList.module.css'

function UsesListItem (props) {
  const { user: u, index, removeUser, selectUser } = props

  const itemStyle = {
    backgroundColor: u.isSelected ? 'lightyellow' : 'white'
  }

  return (
    <li
      style={itemStyle}
      className={styles.userItem}
      onClickCapture={() => selectUser(index)}
    >
      <img
        className={styles.userPhoto}
        src={u.photoSrc}
        alt={`${u.firstName} ${u.lastName}`}
      />
      <p>
        {u.firstName} {u.lastName} {u.age}
      </p>
      <button className={styles.removeBtn} onClick={() => removeUser(index)}>
        <FaRegTrashCan />
      </button>
    </li>
  )
}
// li (onClickCapture), button(onClick)
export default UsesListItem
