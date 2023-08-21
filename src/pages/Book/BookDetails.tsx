import { useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useGetBookByIdQuery,
} from "../../redux/features/book/bookApiSlice";
import Loading from "../../componets/Shared/Loading";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { ApiErrorResponse } from "../../types/globalTypes";

export default function BookDetails() {
  const [review, setReview] = useState("");
  const { id } = useParams();
  const { data, isLoading: loading } = useGetBookByIdQuery(id);
  const [addReview, { isLoading, data: res, error, isError, isSuccess }] =
    useAddReviewMutation();
  console.log(res);
  const book = data?.data;

  const handleAddReview = () => {
    if (!review) {
      return toast.error("Comment is empty");
    }
    addReview({ id, data: { comment: review } });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success(res?.message);
    }

    if (!isLoading && isError && error && "data" in error) {
      const apiError = error as ApiErrorResponse;
      toast.error(apiError.data.errorMessages[0].message);
    }
  }, [isLoading, res, isError, error, isSuccess]);

  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div className="m-5">
      <div>
        <figure className=" flex justify-center w-full">
          <img src={book.imageUrl} alt="book" />
        </figure>
        <div className="card-body border-2 rounded">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p>
            <span className="text-gray-600 font-bold">By </span>
            {book.author}
          </p>
          <div className="flex justify-between my-5">
            <small className="text-gray-600 font-semibold">
              #Genre: {book.genre}
            </small>
            <small className="text-gray-600 font-semibold">
              #Public Date: {book.publicDate}
            </small>
          </div>
        </div>
        <div className="my-5 flex">
          <input
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Write comment"
            className="input input-bordered w-full"
          />
          <button
            onClick={handleAddReview}
            className="btn btn-primary text-white mx-2"
          >
            Comment
          </button>
        </div>
        {book?.reviews?.map((review: string, index: number) => (
          <div className="flex items-center my-5" key={index}>
            <BsPersonCircle size={30} />
            <p className="mx-2 font-semibold text-lg text-gray-800">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
