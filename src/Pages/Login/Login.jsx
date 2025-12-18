import React, {  useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";


import Container from "../../Components/Contaniner/Container";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();
  const location = useLocation();


    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

      toast.success("Invalid credential!", { position: "top-right" });
      signInUser(email, password)
      .then(() => {
        // Signed in
        toast.success("Login successfully......", { position: "top-right" });
        navigation(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
      });
  };

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl text-primary font-bold nuito-font mb-10">
          Login Here!
        </h2>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
                        <label className="label ">Email</label>
                        <input
                          type="text"
                          className="input w-full"
                          placeholder="Email"
                          {...register("email", { required: true })}
                        />
                        {errors.email?.type === "required" && (
                          <p className="text-red-500">Email is Reqiured!</p>
                        )}
                        <label className="label ">Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="input w-full"
                            placeholder="Password"
                            {...register("password", {
                              required: true,
                              minLength: 6,
                              pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                            })}
                          />
                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn bg-transparent border-none right-0 absolute"
                          >
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                          </span>
                        </div>
                        {errors.password?.type === "required" && (
                          <p className="text-red-500">Password is Reqiured!</p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p className="text-red-500">
                            Password length must be 6 character or longer!
                          </p>
                        )}
                        {errors.password?.type === "pattern" && (
                          <p className="text-red-500">
                            Password must contain at least one uppercase letter and one
                            lowercase letter.
                          </p>
                        )}
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
