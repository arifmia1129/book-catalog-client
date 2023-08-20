import Loading from "../../componets/Shared/Loading";
import { useGetBookQuery } from "../../redux/features/book/bookApiSlice";

export default function Book() {
  const { data, isLoading } = useGetBookQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return <div>Book</div>;
}
