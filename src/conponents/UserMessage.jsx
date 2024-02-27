import PropTypes from "prop-types";

function UserMessage(props) {
  if (props.isLoggedIn) {
    return <h2 className="welcome-text">Welcome {props.username}</h2>;
  } else {
    return <h2 className="login-text">Please log in to continue</h2>;
  }
}

//Theres probably a better way of doing this (come back later)
UserMessage.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserMessage.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

UserMessage.defaultProps = {
  isLoggedIn: true,
  username: "please see admin",
};

export default UserMessage;
