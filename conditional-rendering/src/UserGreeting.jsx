function UserGreeting(props) {

    const welcomeMassage = <h1 className="welcome-massage">Welcome back, {props.username}!</h1>

    const erroMassage = 

    return (props.isLoggedIn) ? <h1 className="welcome-massage">Welcome back, {props.username}!</h1> : <h1 className="error-massage">Please SingUp!</h1>
}

export default UserGreeting;