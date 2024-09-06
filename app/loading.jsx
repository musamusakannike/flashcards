import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <PulseLoader color="#6B46C1" />
    </div>
  );
};

export default Loading;
