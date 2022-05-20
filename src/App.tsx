import { Tab } from "@headlessui/react";
import RandomGen from "./modules/random-gen";
import Validate from "./modules/validate";

function App() {
  return (
    <div>
      <header className="py-4 px-6 bg-blue-500">
        <h1 className="font-bold text-white tracking-wide">simeoskey</h1>
      </header>

      <main className="w-11/12 mx-auto my-8">
        <Tab.Group>
          <Tab.List className="text-white rounded-lg flex items-center justify-center">
            <Tab
              className={({ selected }) =>
                `w-1/3 flex justify-center items-center text-sm py-2 rounded-l-lg px-3 hover:bg-gray-500 ${
                  selected ? "bg-gray-500" : "bg-gray-400"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              Generate Keys
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-1/3 flex justify-center items-center text-sm py-2 px-3 hover:bg-gray-500 ${
                  selected ? "bg-gray-500" : "bg-gray-400"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Validate Keys
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-1/3 flex justify-center items-center text-sm py-2 rounded-r-lg px-3 hover:bg-gray-500 ${
                  selected ? "bg-gray-500" : "bg-gray-400"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Find Public Key
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <RandomGen />
            </Tab.Panel>
            <Tab.Panel>
              <Validate />
            </Tab.Panel>
            <Tab.Panel></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  );
}

export default App;
