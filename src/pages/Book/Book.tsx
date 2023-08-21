import { useState } from "react";
import Loading from "../../componets/Shared/Loading";
import { useGetBookQuery } from "../../redux/features/book/bookApiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice";

interface IBook {
  _id: string;
  title: string;
  author: string;
  publicDate: string;
  genre: string;
  user: string;
  imageUrl: string;
  reviews: string[];
}

export default function Book() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useGetBookQuery(searchTerm);

  const books = data?.data;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl my-5">All Available Books Here</p>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search book by name, author or genre"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center place-items-center">
        {books?.map((book: IBook) => (
          <div
            key={book._id}
            className="card w-96 bg-base-100 shadow-xl cursor-pointer"
          >
            <div>
              <div onClick={() => navigate(`book/${book._id}`)}>
                <figure>
                  <img className="h-60 w-full" src={book.imageUrl} alt="book" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{book.title}</h2>
                  <p>
                    <span className="text-gray-600 font-bold">By </span>
                    {book.author}
                  </p>
                  <div className="flex justify-between my-5">
                    <small className="text-gray-600 font-semibold">
                      #{book.genre}
                    </small>
                    <small className="text-gray-600 font-semibold">
                      #{book.publicDate}
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-center mt-2 mb-5">
                <button className="btn btn-secondary w-52">
                  Add To Reading List
                </button>
                <button
                  onClick={() => dispatch(addToWishlist(book))}
                  className="btn btn-primary w-52"
                >
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
