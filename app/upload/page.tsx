"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

function UploadPage() {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="img" />
      )}
      <CldUploadWidget
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset="k75kw3qz"
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}

export default UploadPage;
