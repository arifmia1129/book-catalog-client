import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../redux/features/book/bookApiSlice";
import Loading from "../../componets/Shared/Loading";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id);

  const book = data?.data;

  if (isLoading) {
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
            type="text"
            placeholder="Write comment"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary text-white mx-2">Comment</button>
        </div>
      </div>
    </div>
  );
}
