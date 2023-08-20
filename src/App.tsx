import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { fetchedUserProfile } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchedUserProfile());
  }, [dispatch]);

  return (
    <>
      <MainLayout />
      <Toaster />
    </>
  );
}

export default App;
