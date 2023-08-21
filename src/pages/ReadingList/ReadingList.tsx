import {
  removeFromReadingList,
  updateStatusReadingList,
} from "../../redux/features/readingList/readingListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function ReadingList() {
  const { books } = useAppSelector((state) => state.readingList);
  const dispatch = useAppDispatch();
  return (
    <div className="m-10 max-w-7xl mx-auto">
      {books.length ? (
        <>
          {books?.map((book) => (
            <div
              className="border-2 border-primary rounded-lg shadow-lg my-5 p-5"
              key={book._id}
            >
              <div className=" grid grid-cols-1 md:grid-cols-3 place-content-between place-items-center">
                <img className="w-52 rounded-lg" src={book.imageUrl} alt="" />
                <div>
                  <h3 className="font-bold text-center text-3xl">
                    {book.title}
                  </h3>
                  <h3 className="font-semibold text-center text-xl">
                    by {book.author}
                  </h3>
                  <h3 className="text-center text-xl">Genre: {book.genre}</h3>
                  <h3 className="text-center text-xl">
                    Public Date: {book.publicDate}
                  </h3>
                </div>
                <button
                  onClick={() => dispatch(removeFromReadingList(book))}
                  className="btn btn-primary w-fit px-5 py-2"
                >
                  Remove From Reading List
                </button>
              </div>
              <div className="mb-5 mt-10 ">
                <h3 className="my-5 text-2xl font-bold text-center">
                  Reading Status:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center">
                  <button
                    onClick={() =>
                      dispatch(
                        updateStatusReadingList({
                          id: book._id,
                          status: "Not Start Reading",
                        })
                      )
                    }
                    className={`btn ${
                      book.status === "Not Start Reading"
                        ? " btn-primary"
                        : "bg-white border-primary"
                    }`}
                  >
                    Not Start Reading
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        updateStatusReadingList({
                          id: book._id,
                          status: "Reading",
                        })
                      )
                    }
                    className={`btn ${
                      book.status === "Reading"
                        ? " btn-primary"
                        : "bg-white border-primary"
                    }`}
                  >
                    Reading
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        updateStatusReadingList({
                          id: book._id,
                          status: "Finished",
                        })
                      )
                    }
                    className={`btn ${
                      book.status === "Finished"
                        ? " btn-primary"
                        : "bg-white border-primary"
                    }`}
                  >
                    Finished
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <h3 className="text-3xl font-bold text-gray-600">
            Reading list is empty
          </h3>
        </div>
      )}
    </div>
  );
}
