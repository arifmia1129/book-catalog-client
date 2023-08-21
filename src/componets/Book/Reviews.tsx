import { useGetReviewQuery } from "../../redux/features/book/bookApiSlice";
import Loading from "../Shared/Loading";
import { BsPersonCircle } from "react-icons/bs";

interface IProps {
  id: string;
}

export default function Reviews({ id }: IProps) {
  const { isLoading, data } = useGetReviewQuery(id);

  const reviews = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-5">
      {reviews?.map((review: string, index: number) => (
        <div className="flex items-center my-5" key={index}>
          <BsPersonCircle size={30} />
          <p className="mx-2 font-semibold text-lg text-gray-800">{review}</p>
        </div>
      ))}
    </div>
  );
}
