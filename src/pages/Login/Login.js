import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import swal from "sweetalert";

import config from "~/config";
import { auth } from "~/config/firebase";

function Login() {
  // Login with Email and password
  const signIn = async () => {
    try {
      const email = formik.values.email;
      const password = formik.values.password;
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          popperDone(user.email);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  // Popper done
  const popperDone = (email) => {
    swal("Success", `Welcome ${email} to Ex`, "success", {
      button: {
        text: "Go home",
        value: true,
      },
    }).then(() => {
      window.location = config.routes.home;
    });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
          "Please enter valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
          "Password must be 8-15 characters and container least one letter, one uppercase letter, one number and a speacial character"
        ),
    }),
    onSubmit: (value) => {
      signIn();
      console.log(value);
    },
  });
  // Handle firebase auth change
  console.log("Current User", auth?.currentUser);
  return (
    <>
      <div className=" w-[400px] mx-auto translate-y-[45%] ">
        <h2 className="text-4xl font-semibold mb-4">Log in to Ex</h2>
        <h3 className="font-medium mb-10">Enter your details below</h3>
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            className="outline-none  border-b-2 border-b-gray-400 hover:border-b-black"
          />
          {<p className="text-red-500">{formik.errors.email}</p>}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            className="outline-none mt-8 border-b-2 border-b-gray-400 hover:border-b-black"
          />
          <p className="text-red-500 mb-8">{formik.errors.password}</p>
          <div className="flex justify-between items-start">
            <div className="mt-3">
              <Link
                as="div"
                to={config.routes.sign_up}
                className="hover:!bg-gray-300/80 text-center text-black px-[47px] rounded py-3 border"
              >
                Sign up
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="!bg-secondary hover:!bg-secondary/80 text-center text-white w-[145px] rounded py-3 mb-3"
              >
                Log in
              </button>
              <Link to={config.routes.home} className="text-secondary mt-8">
                <p className="my-auto pl-5">Forget Password?</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
