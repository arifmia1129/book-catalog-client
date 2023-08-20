import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../componets/Shared/Loading";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="h-screen w-full bg-gray-300 m-0 flex justify-center items-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[90vw] md:w-[30vw] md:h-[60vh] h-[90vh] rounded-lg bg-white grid grid-cols-1 place-content-center place-items-center shadow-lg">
            <p className="text-center font-bold text-2xl text-primary mb-10">
              Login
            </p>
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

            <div className="w-full flex justify-center mt-10">
              <input
                className="btn btn-primary text-white w-44"
                value={"Login"}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
