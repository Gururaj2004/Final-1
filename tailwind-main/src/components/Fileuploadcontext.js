import React, { createContext, useContext, useState } from "react";

const FileUploadContext = createContext();

export const FileUploadProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const addUploadedFiles = (files) => {
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <FileUploadContext.Provider
      value={{
        uploadedFiles,
        addUploadedFiles,
      }}
    >
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">{children}</div>
    </FileUploadContext.Provider>
  );
};

export const useFileUpload = () => useContext(FileUploadContext);
