import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useFormik } from "formik";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
import { useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import config from "~/config";
import { auth, database } from "~/config/firebase";
import { ref, set } from "firebase/database";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  signInSuccessUrl: config.routes.home,
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};
function SignUp() {
  //create user to write database
  const wirteUserData = (name, email, phone) => {
    const db = database;
    set(ref(db, "users/2"), {
      id: 2,
      name: name,
      email: email,
      phone: phone,
    });
  };
  // Sign up with Email and Password
  const signUp = async () => {
    const email = formik.values.email;
    const password = formik.values.password;
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Login with google account
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // user logs out,handle ...
          console.log("User not log in");
          return;
        }

        console.log("Logged in user: ", user.displayName);
        const token = await user.getIdToken();
        console.log("Logged in user token: ", token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const popperDone = () => {
    swal("Success", "You are completed create account", "success", {
      button: {
        text: "Login",
        value: true,
      },
    }).then(() => {
      window.location = config.routes.login;
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
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
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      wirteUserData(
        formik.values.name,
        formik.values.email,
        formik.values.phone
      );
      signUp();
      popperDone();
      console.log(values);
    },
  });

  // console.log(formik.errors.phone);
  return (
    <>
      <div className=" w-[400px] mx-auto translate-y-[30%] overflow-hidden">
        <h2 className="text-4xl font-semibold mb-4">Create an account</h2>
        <h3 className="font-medium mb-10">Enter your details below</h3>
        <section>
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="outline-none border-b-2 border-b-gray-400 hover:border-b-black"
            />
            {formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="outline-none mt-8 border-b-2 border-b-gray-400 hover:border-b-black"
            />
            {formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="outline-none mt-8 border-b-2 border-b-gray-400 hover:border-b-black"
            />
            {formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className="outline-none mt-8 border-b-2 border-b-gray-400 hover:border-b-black"
            />
            {formik.errors.confirmPassword && (
              <p className="text-red-500">{formik.errors.confirmPassword}</p>
            )}
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="outline-none mt-8 border-b-2 border-b-gray-400 hover:border-b-black"
            />
            {formik.errors.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}
            <button
              type="submit"
              className="!bg-secondary hover:!bg-secondary/80 text-white rounded w-full py-3 mb-3 mt-8"
            >
              Create Account
            </button>
          </form>
        </section>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
          className="!w-[400px]"
        />
        {/* <button className="flex items-center justify-center w-full border rounded py-3">
          <span>
            <FcGoogle className="mr-2 text-xl" />
          </span>
          <span>Sign up with Google</span>
        </button> */}
        <div className="flex justify-center mt-5 re">
          <span>Already have account?</span>
          <Link
            to={config.routes.login}
            className="ml-4 mb-10 relative hover_bar_underline_black hover:font-medium"
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
