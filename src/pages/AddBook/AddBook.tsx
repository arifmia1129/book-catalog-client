import { useForm } from "react-hook-form";

export default function AddBook() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: object) => {};
  return (
    <div className="m-5 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold">Add a new book</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 ">
          <div className="form-control w-full md:w-2/3 ">
            <label className="label">
              <span className="label-text">Book image url</span>
            </label>
            <input
              {...register("imageUrl")}
              type="text"
              placeholder="Write book image url"
              className="input input-bordered w-full md:w-2/3"
            />
          </div>
          <div className="form-control w-full md:w-2/3">
            <label className="label">
              <span className="label-text">Book title *</span>
            </label>
            <input
              {...register("title", { required: "Book title is required" })}
              type="text"
              placeholder="Write book title"
              className="input input-bordered w-full md:w-2/3"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.title && String(errors.title.message)}
              </span>
            </label>
          </div>
          <div className="form-control w-full md:w-2/3">
            <label className="label">
              <span className="label-text">Book author *</span>
            </label>
            <input
              {...register("author", { required: "Book author is required" })}
              type="text"
              placeholder="Write book author"
              className="input input-bordered w-full md:w-2/3"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.author && String(errors.author.message)}
              </span>
            </label>
          </div>
          <div className="form-control w-full md:w-2/3">
            <label className="label">
              <span className="label-text">Book genre *</span>
            </label>
            <input
              {...register("genre", { required: "Book genre is required" })}
              type="text"
              placeholder="Write book genre"
              className="input input-bordered w-full md:w-2/3"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.genre && String(errors.genre.message)}
              </span>
            </label>
          </div>
          <div className="form-control w-full md:w-2/3">
            <label className="label">
              <span className="label-text">Book public date *</span>
            </label>
            <input
              {...register("publicDate", {
                required: "Book public date is required",
              })}
              type="text"
              placeholder="Write book public date"
              className="input input-bordered w-full md:w-2/3"
            />
            <label className="label">
              <span className="label-text-alt text-red-500">
                {errors.publicDate && String(errors.publicDate.message)}
              </span>
            </label>
          </div>
          <div className=" mt-10">
            <input
              className="btn btn-primary text-white w-44"
              value={"Add"}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
