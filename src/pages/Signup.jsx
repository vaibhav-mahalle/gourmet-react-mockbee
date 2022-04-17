import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="Page-container">
      <div className="page-container flex-center">
        <div className="login-card p-1 flex-column flex-center">
          <div className="font-md p-b-1">
            SignUp
            <span className="font-sm">
              or
              <Link to="/Login" className href="/pages/login.html">
                Login
              </Link>
            </span>
          </div>
          <div className="p-b-1">
            <input className="input" type="text" placeholder="Phone Number" />
          </div>
          <div className="p-b-1">
            <input className="input" type="text" placeholder="Name" />
          </div>
          <div className="p-b-1">
            <input className="input" type="text" placeholder="Email" />
          </div>
          <div className="p-b-1">
            <input className="input" type="text" placeholder="Password" />
          </div>
          <div>
            <button className="btn-primary ">SignUp</button>
          </div>
          <div className="p-l-1">
            I accept the <Link to="/Signup">Terms &amp; Conditions</Link> &amp;
            <Link to="/Signup">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
