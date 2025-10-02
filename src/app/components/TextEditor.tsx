"use client";

interface TextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  height?: number;
  disabled?: boolean;
}

export default function TextEditor({ 
  value, 
  onChange, 
  placeholder = "Tulis jawaban Anda di sini...",
  height = 200,
  disabled = false
}: TextEditorProps) {
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-elkpd-2 focus:border-transparent resize-none font-sans text-sm"
        style={{ height: `${height}px` }}
      />
    </div>
  );
}
