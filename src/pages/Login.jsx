import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Page-container">
      
      <div className="page-container flex-center">
        <div className="login-card p-1 flex-column flex-center">
          <div className="font-md p-b-1">
            Login
            <span className="font-sm">
              or
              <Link to="/Signup" className href="/pages/signup.html">
                create an account
              </Link>
            </span>
          </div>
          <div className="p-b-1">
            <input className="input" type="text" placeholder="Phone Number" />
          </div>
          <div>
            <button className="btn-primary ">Login</button>
          </div>
          <div className="p-l-1">
            I accept the <Link to="/Login">Terms &amp; Conditions</Link> &amp;
            <Link to="/Login">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
