import RandomGen from "./modules/random-gen";
import Validate from "./modules/validate";

function App() {
  return (
    <div>
      <header className="py-4 px-6 bg-blue-500">
        <h1 className="font-bold text-white tracking-wide">simeoskey</h1>
      </header>

      <main className="w-11/12 mx-auto my-8">
        <RandomGen />

        <hr className="my-12" />

        <Validate />
      </main>
    </div>
  );
}

export default App;
