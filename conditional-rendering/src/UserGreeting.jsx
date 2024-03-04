import PropTypes from 'prop-types';
function UserGreeting(props) {

    const welcomeMassage = <h1 className="welcome-massage">Welcome back, {props.username}!</h1>

    const erroMassage = <h1 className="error-massage">Please SingUp!</h1>

    return (props.isLoggedIn ? welcomeMassage: erroMassage);

}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting;