import { clipboard } from "@tauri-apps/api";
import { ecc } from "eosjs/dist/eosjs-ecc-migration";
import { useState } from "react";

const RandomGen = () => {
  const [keys, setKeys] = useState({
    publicKey: "",
    privateKey: "",
  });

  const [pubCopied, setPubCopied] = useState(false);
  const [privCopied, setPrivCopied] = useState(false);

  const copyClipboard = (text: string) => {
    if (text == "") return;

    clipboard.writeText(text);
  };

  const generateRandomKeys = () => {
    ecc.randomKey(undefined, { secureEnv: true }).then((privKey) => {
      setKeys({
        privateKey: privKey,
        publicKey: ecc.privateToPublic(privKey),
      });
    });
  };

  return (
    <div className="shadow-lg p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-gray-700">
          Generate Random Keys
        </h3>

        <button
          onClick={generateRandomKeys}
          className="text-sm bg-blue-400 hover:bg-blue-500 text-white duration-300 py-2 px-4 rounded-lg"
        >
          Generate New Keys
        </button>
      </div>
      <div className="mx-4">
        <ul>
          <li>
            <span className="text-gray-600 text-sm uppercase">Public Key:</span>
            <p className="mx-4 bg-gray-200 py-2 px-2 rounded-lg text-sm text-gray-800 font-bold flex items-center justify-between">
              <span>{keys.publicKey}</span>
              <button
                onClick={() => {
                  copyClipboard(keys.publicKey);
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white text-xs py-1 px-3 rounded-lg"
              >
                copy
              </button>
            </p>
          </li>
          <li>
            <span className="text-gray-600 text-sm uppercase">
              Private Key:
            </span>
            <p className="mx-4 bg-gray-200 py-2 px-2 rounded-lg text-sm text-gray-800 font-bold flex items-center justify-between">
              <span>{keys.privateKey}</span>
              <button
                onClick={() => {
                  copyClipboard(keys.privateKey);
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white text-xs py-1 px-3 rounded-lg"
              >
                copy
              </button>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomGen;
