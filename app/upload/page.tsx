'use client';
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';

interface CloundinaryResult {
  public_id: string;
}

const page = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <div>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A coffee image"
        />
      )}
      <CldUploadWidget
        uploadPreset="exabfdmx"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles:5
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloundinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-accent" onClick={() => open()}>
            Upload an Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default page;
