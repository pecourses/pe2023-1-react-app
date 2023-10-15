import { FaRegTrashCan } from 'react-icons/fa6'

function UsesListItem (props) {
  const { user: u, index, removeUser } = props

  return (
    <li>
      <img
        width='50px'
        height='50px'
        src={u.photoSrc}
        alt={`${u.firstName} ${u.lastName}`}
      />
      <button onClick={() => removeUser(index)}>
        <FaRegTrashCan />
      </button>
      <p>
        {u.firstName} {u.lastName} {u.age}
      </p>
    </li>
  )
}

export default UsesListItem
