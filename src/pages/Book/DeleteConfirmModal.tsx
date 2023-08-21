import { useEffect } from "react";
import { useDeleteBookMutation } from "../../redux/features/book/bookApiSlice";
import { toast } from "react-hot-toast";
import { ApiErrorResponse } from "../../types/globalTypes";
import { useNavigate } from "react-router-dom";

interface IProps {
  book: {
    _id: string;
    title: string;
  };
}

export default function DeleteConfirmModal({ book }: IProps) {
  const { _id, title } = book;
  const [deleteBook, { isLoading, isError, data: res, isSuccess, error }] =
    useDeleteBookMutation();

  const navigate = useNavigate();

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

  return (
    <dialog
      id="book_delete_confirmation"
      className="modal modal-bottom sm:modal-middle"
    >
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Delete Confirmation!</h3>
        <p className="py-4">Are you sure delete {title} from book list?</p>
        <div className="modal-action">
          <button className="btn">Close</button>
          <button onClick={() => deleteBook(_id)} className="btn">
            Delete
          </button>
        </div>
      </form>
    </dialog>
  );
}
