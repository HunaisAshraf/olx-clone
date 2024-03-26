import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleName = (value) => {
    setUserName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handlePhone = (value) => {
    setPhone(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let res = await signUp(userName, email, phone, password);
    if (res.success) {
      toast.success("signup successfull");
    } else {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  if (user) return navigate("/");

  return (
    <div className="flex justify-center items-center min-h-[70vh] mt-4">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="border-2 border-solid border-gray-300 p-10 rounded"
      >
        <p className="text-3xl font-bold">Sign Up</p>
        <FormInput
          type="text"
          placeHolder="User Name"
          handleChange={handleName}
        />
        <FormInput
          type="emial"
          placeHolder="Email"
          handleChange={handleEmail}
        />
        <FormInput type="tel" placeHolder="Phone" handleChange={handlePhone} />
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
          <Link to="/login">Already have an account</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
