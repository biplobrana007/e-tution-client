import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";


import Container from "../../Components/Contaniner/Container";
import toast from "react-hot-toast";

const Login = () => {
  // const { signInUser } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  // const navigation = useNavigate();
  // const location = useLocation();

const handleLogin =(e)=>{
  e.preventDefault();
  toast.success("Login successfully......", { position: "top-right" })
}
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //     toast.success("Invalid credential!", { position: "top-right" });
  //     signInUser(email, password)
  //     .then(() => {
  //       // Signed in
  //       toast.success("Login successfully......", { position: "top-right" });
  //       navigation(`${location.state ? location.state : "/"}`);
  //     })
  //     .catch(() => {
  //     });
  // };

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl text-primary font-bold nuito-font mb-10">
          Login Here!
        </h2>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label ">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label ">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn bg-transparent border-none right-0 absolute"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <span>Forgot Password?</span>
              <button
                type="submit"
                className="btn bg-primary text-white mt-4 hover:bg-secondary border-none"
              >
                Login
              </button>
              <p className="text-center ">
                No account?{" "}
                <Link
                  className="font-bold text-[15px]  text-primary hover:underline ml-1"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
        {/* <div className="mt-10">
          <GoogleSignIn></GoogleSignIn>
        </div> */}
      </div>
    </Container>
  );
};

export default Login;
