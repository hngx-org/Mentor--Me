import { useState } from "react";

export const useFileUpload = () => {
  const [file, setFile] = useState("");

  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = new FileReader();
    if (event.target.files?.[0]) {
      file.readAsDataURL(event.target.files[0]);
    }
    file.onload = (loadEvent) => {
      if (loadEvent.target?.result) {
        setFile(loadEvent.target.result as string);
      }
    };
  };

  return {
    file,
    setFile,
    onFileUpload,
  };
};
