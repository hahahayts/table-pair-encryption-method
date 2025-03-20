import { useState } from "react";
import { encrypt } from "./lib";

const App = () => {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const handleEncryption = (text: string) => {
    const inputText = text.toLocaleUpperCase();
    setEncryptedText(encrypt(inputText));
  };

  const handleDecryption = (text: string) => {
    setEncryptedText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md backdrop-blur-sm bg-white/10 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-center mb-4 sm:mb-6 md:mb-8">
            Table Pair Encryption
          </h1>

          <div className="mt-4 sm:mt-6">
            <label className="block text-gray-300 mb-2 text-sm sm:text-base">
              Input Text
            </label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Enter text to encrypt"
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 sm:px-4 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-y"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={() => handleEncryption(text)}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition duration-300 transform hover:scale-105"
            >
              Encrypt
            </button>
            <button
              onClick={() => handleDecryption(text)}
              className="w-full sm:w-auto mt-2 sm:mt-0 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-medium py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition duration-300 transform hover:scale-105"
            >
              Decrypt
            </button>
          </div>

          <div className="mt-4 sm:mt-6">
            <label className="block text-gray-300 mb-2 text-sm sm:text-base">
              Result
            </label>
            <textarea
              value={encryptedText}
              disabled
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 sm:px-4 text-white opacity-80 cursor-not-allowed text-base sm:text-lg md:text-xl font-medium text-center resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
