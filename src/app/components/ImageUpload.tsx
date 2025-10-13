"use client";

import { useState } from 'react';

interface ImageUploadProps {
  questionIdx: number | string;
  onImagesChange: (questionIdx: number | string, images: {[key: string]: {preview: string, base64: string, originalName: string}}) => void;
  disabled?: boolean;
}

export default function ImageUpload({ questionIdx, onImagesChange, disabled = false }: ImageUploadProps) {
  const [uploadedImages, setUploadedImages] = useState<{[key: string]: {preview: string, base64: string, originalName: string}}>({});

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Generate random filename with timestamp
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const fileExtension = file.name.split('.').pop();
      const newFileName = `${timestamp}_${randomString}.${fileExtension}`;
      
      // Create object URL for preview
      const objectUrl = URL.createObjectURL(file);
      
      // Convert to base64 for PDF
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        
        // Store both object URL and base64
        const newImages = {
          ...uploadedImages,
          [newFileName]: {
            preview: objectUrl,
            base64: base64,
            originalName: file.name
          }
        };
        setUploadedImages(newImages);
        onImagesChange(questionIdx, newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (filename: string) => {
    const imageData = uploadedImages[filename];
    if (imageData) {
      URL.revokeObjectURL(imageData.preview);
    }
    
    const newImages = { ...uploadedImages };
    delete newImages[filename];
    setUploadedImages(newImages);
    onImagesChange(questionIdx, newImages);
  };

  return (
    <div className="w-full">
      {/* Upload Button */}
      <div className="mb-4">
        <label className="inline-flex items-center px-4 py-2 bg-elkpd-2 text-white rounded-lg hover:bg-elkpd-1 transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          <span className="mr-2">📷</span>
          Upload Gambar
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={disabled}
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-500 mt-1">Format: JPG, PNG, GIF, WebP (Max 5MB)</p>
      </div>

      {/* Uploaded Images Gallery */}
      {Object.keys(uploadedImages).length > 0 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
          <div className="text-sm font-medium text-gray-700 mb-3">📁 Gambar yang Di-upload:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Object.entries(uploadedImages).map(([filename, imageData]) => (
              <div key={filename} className="relative group">
                <img
                  src={imageData.preview}
                  alt={imageData.originalName}
                  className="w-full h-24 object-cover rounded-lg border border-gray-300 shadow-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => handleDeleteImage(filename)}
                    disabled={disabled}
                    className="opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-all duration-200 disabled:opacity-50"
                  >
                    ×
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-1 truncate" title={imageData.originalName}>
                  {imageData.originalName}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
