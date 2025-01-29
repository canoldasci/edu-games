import OrderingGame from "../_components/OrderingGame";
import { atomicTheories as Items } from "../../constants/orderingGameDataSets";

const App = () => {
  return (
    <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-center relative main-card">
      <h1 className="font-medium text-xl text-gray-800 text-center mb-4">
        Atom teorilerini kronolojik sıraya göre sıralayınız.
      </h1>
      <OrderingGame Items={Items} />
    </div>
  );
};

export default App;
