
import React, { useState } from "react";
import { useFileUpload } from "./Fileuploadcontext";

const Upload = () => {
  const { uploadedFiles, addUploadedFiles } = useFileUpload();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [view, setView] = useState("upload");

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newFiles = Array.from(files);
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleUpload = () => {
    addUploadedFiles(selectedFiles);
    setSelectedFiles([]);
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };

  return (
    <div
      className="container mt-5 p-4"
      style={{
        backgroundColor: "#f7f7f7",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1 className="text-center">Upload Files</h1>
      {view === "upload" && (
        <>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="form-control-file"
          />

          {selectedFiles.length > 0 && (
            <div>
              <p className="mt-3">Selected Files:</p>
              <ul className="list-group">
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {file.name}
                    <button
                      onClick={() => handleRemoveFile(file)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button onClick={handleUpload} className="btn btn-primary mt-3">
            Upload Files
          </button>
        </>
      )}

      {view === "uploaded" && (
        <div className="mt-3">
          <p>Uploaded Files:</p>
          <ul className="list-group">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="list-group-item">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-center mt-3">
        <button
          className={`btn btn-link ${view === "upload" ? "disabled" : ""}`}
          onClick={() => setView("upload")}
        >
          Upload
        </button>{" "}
        |{" "}
        <button
          className={`btn btn-link ${view === "uploaded" ? "disabled" : ""}`}
          onClick={() => setView("uploaded")}
        >
          View Uploaded
        </button>
      </div>
    </div>
  );
};

export default Upload;
