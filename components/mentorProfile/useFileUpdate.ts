import React, { useState } from "react";

export default function useFileUpload() {
  const [file, setFile] = useState("");
  const [fileError, setFileError] = useState("");

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    setFile("");
    const file = new FileReader();
    if (event.target.files?.[0]) {
      file.readAsDataURL(event.target.files[0]);
    }
    file.onload = (loadEvent) => {
      if (loadEvent.target?.result) {
        if (loadEvent.target.result.toString().split("/")[0] !== "data:image") {
          setFileError("File must be an image (png, jpeg, jpg or gif)");
          return;
        }
        if (loadEvent.target.result.toString().length / 1024 > 2300) {
          setFileError("file too large, should be less than 2mb");
          return;
        }
        setFile(loadEvent.target.result as string);
      }
    };
  };

  return {
    file,
    setFile,
    onFileUpload,
    fileError,
  };
}
