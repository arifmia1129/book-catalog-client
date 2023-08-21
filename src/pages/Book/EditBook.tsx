import { useForm } from "react-hook-form";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../../redux/features/book/bookApiSlice";
import { ApiErrorResponse } from "../../types/globalTypes";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import Loading from "../../componets/Shared/Loading";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();
  const { data, isLoading: loading } = useGetBookByIdQuery(id);

  const navigate = useNavigate();

  const book = data?.data;

  const { title, author, genre, imageUrl, publicDate } = book || {};

  const [updateBook, { isLoading, data: res, isError, error, isSuccess }] =
    useUpdateBookMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: object) => {
    updateBook({ id, data });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success(res.message);
      navigate("/");
    }

    if (!isLoading && isError && error && "data" in error) {
      const apiError = error as ApiErrorResponse;
      toast.error(apiError.data.errorMessages[0].message);
    }
  }, [isLoading, res, isError, error, isSuccess, navigate]);

  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div className="m-5 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold">Update book info</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 ">
          <div className="form-control w-full md:w-2/3 ">
            <label className="label">
              <span className="label-text">Book image url</span>
            </label>
            <input
              {...register("imageUrl")}
              defaultValue={imageUrl}
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
              defaultValue={title}
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
              defaultValue={author}
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
              defaultValue={genre}
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
              defaultValue={publicDate}
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
              defaultValue={"Update"}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
