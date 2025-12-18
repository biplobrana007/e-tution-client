import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import Container from "../../Components/Contaniner/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import GoogleSignIn from "../../Components/SocialSignIn/GoogleSignIn";

const SignUp = () => {
  //   const navigate = useNavigate();
  const { createUser, user } = useAuth();
  console.log(user);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
    const displayName = data.name;
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((user) => {
        updateProfile(user.user, { displayName})
          .then(() => {
            toast.success("SignUp successfully......", {
              position: "top-right",
            });
            navigation(`${location.state ? location.state : "/"}`);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(err.code, { position: "top-right" });
      });
  };

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl text-primary font-bold nuito-font mb-10">
          SignUp Here!
        </h2>
        <div className="card bg-base-200 w-full max-w-sm shrink-0 ">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignIn)} className="fieldset">
              <label className="label ">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is Reqiured!</p>
              )}

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

              <label className="label">Role</label>
              <select
                defaultValue="Select Role"
                className="select w-full"
                {...register("role")}
              >
                <option disabled={true}>Select Role</option>
                <option>Student</option>
                <option>Tutor</option>
              </select>
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
              <button
                type="submit"
                className="btn bg-primary text-white mt-4 hover:bg-secondary border-none"
              >
                Register
              </button>
              <p className="text-center ">
                Already have an account?
                <Link
                  className="font-bold text-[15px] text-primary hover:underline ml-1"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="mt-10">
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
