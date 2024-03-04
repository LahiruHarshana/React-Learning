function UserGreeting(props) {

    return (props.isLoggedIn) ? <h1 className="welcome-massage">Welcome back, {props.username}!</h1> : <h1 className="error-massage">Welcome, Guest!</h1>
}

export default UserGreeting;