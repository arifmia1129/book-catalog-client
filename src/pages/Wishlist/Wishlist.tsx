import { removeFromWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Wishlist() {
  const { books } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  return (
    <div className="m-10 max-w-7xl mx-auto">
      {books.length ? (
        <>
          {books?.map((book) => (
            <div
              className="border-2 border-primary rounded-lg shadow-lg my-5 p-5 grid grid-cols-1 md:grid-cols-3 place-content-between place-items-center"
              key={book._id}
            >
              <img className="w-52 rounded-lg" src={book.imageUrl} alt="" />
              <div>
                <h3 className="font-bold text-center text-3xl">{book.title}</h3>
                <h3 className="font-semibold text-center text-xl">
                  by {book.author}
                </h3>
                <h3 className="text-center text-xl">Genre: {book.genre}</h3>
                <h3 className="text-center text-xl">
                  Public Date: {book.publicDate}
                </h3>
              </div>
              <button
                onClick={() => dispatch(removeFromWishlist(book))}
                className="btn btn-primary w-52"
              >
                Remove From Wishlist
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <h3 className="text-3xl font-bold text-gray-600">
            Wishlist is empty
          </h3>
        </div>
      )}
    </div>
  );
}
