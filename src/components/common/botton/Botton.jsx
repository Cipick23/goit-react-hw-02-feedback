import styles from './Button.module.css'
import PropTypes from './prop-types'

function Button({ children, action, type = "button" }) {
    
    return (
      <button variant="outline-success" className={styles.black} onClick={action} type={type}>
        {children}
      </button>
    );
  }
  
  Button.propTypes = {
    children: PropTypes.any,
    action: PropTypes.func,
    button: PropTypes.string,
  };
  
  export default Button;