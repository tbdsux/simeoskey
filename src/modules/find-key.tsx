import { ecc } from "eosjs/dist/eosjs-ecc-migration";
import { useRef, useState } from "react";

const FindKey = () => {
  const [validation, setValidation] = useState("");
  const [priv, setPriv] = useState("");

  const inputPrivate = useRef<HTMLInputElement>(null);

  const find = () => {
    const privKey = inputPrivate.current?.value ?? "";
    if (privKey === "") {
      return;
    }

    if (!ecc.isValidPrivate) {
      setValidation("Invalid private key!");
      return;
    }

    const confPrivKey = ecc.privateToPublic(privKey);
    setValidation("");
    setPriv(confPrivKey);
  };

  return (
    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="font-bold text-lg text-gray-700">Find Public Key</h3>

      <div className="mx-4 mt-4">
        <div className="flex flex-col my-2">
          <label
            className="text-sm uppercase text-gray-600"
            htmlFor="public-key"
          >
            Private Key:
          </label>
          <input
            className="py-2 px-3 rounded-lg text-sm border"
            type="text"
            name="public-key"
            id="public-key"
            ref={inputPrivate}
          />
        </div>
        <div className="flex flex-col my-2">
          <label
            className="text-sm uppercase text-gray-600"
            htmlFor="public-key"
          >
            Public Key:
          </label>
          <p className="text-sm">{priv}</p>
        </div>

        <div className="text-center">
          <p className="text-center text-sm text-gray-700">{validation}</p>

          <button
            onClick={find}
            className="py-2 mx-auto px-8 rounded-lg bg-blue-400 uppercase hover:bg-blue-500 text-white text-sm mt-3"
          >
            Validate
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindKey;
