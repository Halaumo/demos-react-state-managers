import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  margin: -10px;

  & > a {
    margin: 10px;
  }
`

const Component = () => {
  return (
    <>
      <Nav>
        <Link to='/'>Home page</Link>
        <Link to='/cash'>Cash page</Link>
        <Link to='/customers'>Customers page</Link>
      </Nav>
    </>
  )
}

export default Component
