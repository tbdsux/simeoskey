import { ecc } from "eosjs/dist/eosjs-ecc-migration";
import { useRef, useState } from "react";

const Validate = () => {
  const [validation, setValidation] = useState("...");

  const inputPublic = useRef<HTMLInputElement>(null);
  const inputPrivate = useRef<HTMLInputElement>(null);

  const validate = () => {
    const pubKey = inputPublic.current?.value || "";
    const privKey = inputPrivate.current?.value || "";

    if (pubKey === "" || privKey === "") {
      // do not continue if one of the two is empty
      return;
    }

    if (ecc.isValidPublic(pubKey)) {
      if (ecc.isValidPrivate(privKey)) {
        let publicKey = ecc.privateToPublic(privKey);

        if (publicKey === pubKey) {
          setValidation("Valid key pair!");
          return;
        }
      }
      setValidation("Invalid Private Key.");
      return;
    }
    setValidation("Invalid Public Key.");
  };

  return (
    <div className="shadow-lg p-6 rounded-lg">
      <h3 className="font-bold text-lg text-gray-700">Validate Key Pair</h3>

      <div className="mx-4 mt-4">
        <div className="flex flex-col my-2">
          <label
            className="text-sm uppercase text-gray-600"
            htmlFor="public-key"
          >
            Public Key:
          </label>
          <input
            className="py-2 px-3 rounded-lg text-sm border"
            type="text"
            name="public-key"
            id="public-key"
            ref={inputPublic}
          />
        </div>
        <div className="flex flex-col my-2">
          <label
            className="text-sm uppercase text-gray-600"
            htmlFor="private-key"
          >
            Private Key:
          </label>
          <input
            className="py-2 px-3 rounded-lg text-sm border"
            type="text"
            name="private-key"
            id="private-key"
            ref={inputPrivate}
          />
        </div>

        <div className="text-center">
          <p className="text-center text-sm text-gray-700">{validation}</p>

          <button
            onClick={validate}
            className="py-2 mx-auto px-8 rounded-lg bg-blue-400 uppercase hover:bg-blue-500 text-white text-sm mt-3"
          >
            Validate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Validate;
