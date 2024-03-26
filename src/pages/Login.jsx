import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await logIn(email, password);
    if (res.success) {
      toast.success("signup successfull");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  if (user) return navigate("/");
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="border-2 border-solid border-gray-300 p-10 rounded"
      >
        <p className="text-3xl font-bold">Log In</p>

        <FormInput
          type="emial"
          placeHolder="Email"
          handleChange={handleEmail}
        />
        <FormInput
          type="password"
          placeHolder="Password"
          handleChange={handlePassword}
        />
        <div className="text-center">
          {loading ? (
            <Spinner />
          ) : (
            <button className="bg-green-900 text-white py-2 px-3 rounded">
              Submit
            </button>
          )}
        </div>
        <div className="text-center my-2">
          <Link to="/signup">Create an account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
