import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import userPhoto from '../../../public/userPhoto.png';

const ModalLoginForm = () => {
  const { createUser, signIn, googleSignIn, user, logOut } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setMessage(
        <p className="font-bold text-red-500">
          Password must be 6 characters or more
        </p>
      );
    }
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    setMessage(null);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setMessage(
          <p className="font-bold text-green-500">
            Account Created Successfully!!!
          </p>
        );
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setMessage(null);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toggleModal();
      })
      .catch((error) => {
        console.error(error);
        setMessage(
          <p className="font-bold text-red-500">email/password is incorrect</p>
        );
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toggleModal()
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleLogOut=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.error(error);
    })
  }

  return (
    <>
      {user ? (
        <div className="dropdown dropdown-end">
        <label tabIndex={0}>
          <img className="h-16" src={userPhoto} alt="" />
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 me-8">
          <li><a>{user.email}</a></li>
          <li onClick={handleLogOut}><a>Log Out</a></li>
        </ul>
      </div>
      ) : (
        <button
          className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Login / Registration
        </button>
      )}
      {showModal && (
        <div data-aos='zoom-in-up' className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              {/* Close Button */}
              <div className="flex justify-end pt-4 pr-4">
                <button
                  className="text-[#ff8c98] hover:text-gray-800"
                  onClick={toggleModal}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586 6.707 5.293z" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex justify-center">
                <div className="flex">
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "login"
                        ? "bg-[#ff8c98] text-white font-semibold rounded-t-lg"
                        : "bg-gray-300 font-semibold rounded-t-lg"
                    }`}
                    onClick={() => handleTabChange("login")}
                  >
                    Log In
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "signup"
                        ? "bg-[#ff8c98] text-white font-semibold rounded-t-lg"
                        : "bg-gray-300 font-semibold rounded-t-lg"
                    }`}
                    onClick={() => handleTabChange("signup")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-4">
                {/* Login Form */}
                {activeTab === "login" && (
                  <form onSubmit={handleLogin}>
                    <div className="text-center">{message}</div>
                    <label
                      htmlFor="login-email"
                      className="block font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full border-gray-300 rounded px-3 py-2"
                      required
                    />

                    <label
                      htmlFor="login-password"
                      className="block font-medium text-gray-700 mb-1 mt-3"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="w-full border-gray-300 rounded px-3 py-2"
                      required
                    />
                    <p>
                      No Account?{" "}
                      <Link className="text-[#ff8c98]">Create One</Link>
                    </p>

                    <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded mt-4 w-full">
                      Log In
                    </button>
                    <div className="divider">OR</div>
                    <FaGoogle
                      onClick={handleGoogleSignIn}
                      className="mx-auto border-transparent text-3xl p-1 rounded-full bg-[#ff8c98] text-white cursor-pointer"
                    />
                  </form>
                )}

                {/* Sign Up Form */}
                {activeTab === "signup" && (
                  <form onSubmit={handleCreateUser}>
                    <div className="text-center">{message}</div>
                    <label
                      htmlFor="signup-name"
                      className="block font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="w-full border-gray-300 rounded px-3 py-2"
                      required
                    />

                    <label
                      htmlFor="signup-email"
                      className="block font-medium text-gray-700 mb-1 mt-3"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full border-gray-300 rounded px-3 py-2"
                      required
                    />

                    <label
                      htmlFor="signup-password"
                      className="block font-medium text-gray-700 mb-1 mt-3"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="w-full border-gray-300 rounded px-3 py-2"
                      required
                    />
                    <label
                      htmlFor="photo-url"
                      className="block font-medium text-gray-700 mb-1 mt-3"
                    >
                      Photo URL
                    </label>
                    <input
                      name="photo"
                      type="text"
                      className="w-full border-gray-300 rounded px-3 py-2"
                      required
                    />
                    <p>
                      Already have an account?{" "}
                      <Link className="text-[#ff8c98]">Log in</Link>
                    </p>
                    <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded mt-4 w-full">
                      Sign Up
                    </button>
                    <div className="divider">OR</div>
                    <FaGoogle
                      onClick={handleGoogleSignIn}
                      className="mx-auto border-transparent text-3xl p-1 rounded-full bg-[#ff8c98] text-white cursor-pointer"
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLoginForm;
