import { useNavigate, useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useGetBookByIdQuery,
} from "../../redux/features/book/bookApiSlice";
import Loading from "../../componets/Shared/Loading";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ApiErrorResponse } from "../../types/globalTypes";
import Reviews from "../../componets/Book/Reviews";
import { useAppSelector } from "../../redux/hooks";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function BookDetails() {
  const [review, setReview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading: loading } = useGetBookByIdQuery(id);
  const [addReview, { isLoading, data: res, error, isError, isSuccess }] =
    useAddReviewMutation();
  const book = data?.data;

  const { email } = useAppSelector((state) => state.user);

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
          {book?.user === email && (
            <div className="flex justify-center">
              <div>
                <button
                  onClick={() => navigate(`/edit-book/${id}`)}
                  className="btn bg-yellow-500 text-white rounded px-5 py-2 mx-2"
                >
                  Edit Book
                </button>
                <button
                  onClick={() => window?.book_delete_confirmation?.showModal()}
                  className="btn bg-red-500 text-white rounded px-5 py-2 mx-2"
                >
                  Delete Book
                </button>
              </div>
            </div>
          )}
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
        <Reviews id={id as string} />
      </div>
      <DeleteConfirmModal book={book} />
    </div>
  );
}
