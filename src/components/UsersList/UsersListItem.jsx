import { FaRegTrashCan } from 'react-icons/fa6'
import styles from './UsersList.module.css'

function UsesListItem (props) {
  const { user: u, index, removeUser } = props

  return (
    <li className={styles.userItem}>
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

export default UsesListItem
