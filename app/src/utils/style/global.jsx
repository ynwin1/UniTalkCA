import { ThemeContext } from '../../utils/context'
import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  const StyleGlobalStyle = createGlobalStyle`

  * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    
        body
        {
        
        background-color: ${({ isDark }) => (isDark ? '#2F2E41' : 'white')};
      }

`

  return <StyleGlobalStyle isDark={theme === 'light'} />
}

export default GlobalStyle