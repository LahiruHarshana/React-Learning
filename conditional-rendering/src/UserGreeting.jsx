function UserGreeting(props) {

    return (props.isLoggedIn) ? <h1>Welcome back, {props.username}!</h1> : <h1>Welcome, Guest!</h1>
}

export default UserGreeting;