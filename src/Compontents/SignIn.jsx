import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [setIsloading] = useState(false);
  sessionStorage.setItem("isAuthenticated", "false");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    const formData = {
      username: values.username,
      password: values.password,
    };
    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost/react/PhpReact/PHP/signin.php",
          formData
        );
        if (response.data.status === "200") {
          sessionStorage.setItem("isAuthenticated", "true");
        }
        setIsloading(false);
        if (response.data.redirect) {
          alert("Login Successful");
          setTimeout(() => {
            navigate(response.data.redirect);
          }, 500);
        }
      } catch (error) {
        setIsloading(false);
        console.error(error);
      }
    }, 2000);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-xl font-bold">
      <form
        className="w-2/3 h-2/3 flex items-center justify-center flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit(e);
        }}
      >
        <div className="flex flex-col gap-y-1 mb-3 w-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleOnChange}
            values={values.username}
            placeholder="Username"
            className=" w-full text-base font-normal border pl-3 h-8 py-1 rounded-xl "
          />
        </div>
        <div className="flex flex-col gap-y-1 mb-3 w-full">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={handleOnChange}
            values={values.password}
            placeholder="Password"
            className=" w-full text-base font-normal border pl-3 h-8 py-1 rounded-xl "
          />
        </div>
        <button
          className="btn block bg-blue-400 rounded-xl text-white py-2 px-5 active:scale-95 transition-all"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
