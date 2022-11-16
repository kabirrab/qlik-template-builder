import PropTypes from 'prop-types'

const Header = ({appName}) => {
  return (
    <header>
        <h1>{appName}</h1>
    </header>
  )
}

Header.defaultProps = {
    appName: 'Tahola Qlik application template builder'
}

Header.propType = {
    appName: PropTypes.string.isRequired,
}

export default Header