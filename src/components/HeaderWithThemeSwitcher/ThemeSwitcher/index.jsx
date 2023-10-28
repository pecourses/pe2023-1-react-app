import { useContext } from 'react'
import { ThemeContext } from '../../../contexts'
import CONSTANTS from '../../../constants'

const {
  THEMES: { LIGTH, DARK, PURPLE }
} = CONSTANTS

function ThemeSwitcher () {
  const { theme, setTheme } = useContext(ThemeContext)

  const themeChangeHandler = ({ target: { value } }) => {
    setTheme(value)
  }

  return (
    <select value={theme} onChange={themeChangeHandler}>
      <option value={LIGTH}>Light</option>
      <option value={DARK}>Dark</option>
      <option value={PURPLE}>Purple</option>
    </select>
  )
}

export default ThemeSwitcher
