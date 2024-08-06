import BoltCard from "./components/Boltcard";
import DataBaseCard from "./components/DataBaseCard";

const App = () => {
  return (
    <main className="w-full h-screen flex place-items-center justify-center flex-col gap-4">
      <DataBaseCard />
      <BoltCard />
    </main>
  );
};

export default App;
