import { useForm } from "react-hook-form";
import Loading from "../../componets/Shared/Loading";
import { useRegisterUserMutation } from "../../redux/features/user/userApiSlice";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { ApiErrorResponse } from "../../types/globalTypes";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

function Signup() {
  const navigate = useNavigate();
  const [registerUser, { isLoading, data: res, isError, error, isSuccess }] =
    useRegisterUserMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: object) => {
    registerUser(data);
  };
  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success(res?.message);
      reset();
    }

    if (!isLoading && isError && error && "data" in error) {
      const apiError = error as ApiErrorResponse;
      toast.error(apiError.data.errorMessages[0].message);
    }
  }, [isLoading, res, reset, isError, error, isSuccess]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="h-screen w-full bg-gray-300 m-0 flex justify-center items-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[90vw] md:w-[30vw] md:h-[60vh] h-[90vh] rounded-lg bg-white grid grid-cols-1 place-content-center place-items-center shadow-lg">
            <div
              onClick={() => navigate("/")}
              className="flex justify-start w-full mt-[-10px] ml-20 cursor-pointer"
            >
              <AiFillHome size={30} />
            </div>
            <p className="text-center font-bold text-2xl text-primary mb-10">
              Register
            </p>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Write your name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.name && String(errors.name.message)}
                </span>
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                placeholder="Write your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.email && String(errors.email.message)}
                </span>
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password *</span>
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Write your password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.password && String(errors.password.message)}
                </span>
              </label>
            </div>
            <div>
              <p className="text-center">
                <small>Already have an account? </small>
                <small
                  onClick={() => navigate("/login")}
                  className="text-blue-500 font-semibold cursor-pointer"
                >
                  Login now
                </small>
              </p>
            </div>
            <div className="w-full flex justify-center mt-10">
              <input
                className="btn btn-primary text-white w-44"
                value={"Sign Up"}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
