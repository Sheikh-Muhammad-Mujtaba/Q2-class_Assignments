// src/components/searchTerm.tsx
"use client";

interface SearchTermProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder?: string;
}

export default function SearchTerm({
  searchTerm,
  setSearchTerm,
  placeholder,
}: SearchTermProps) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder || "Search..."}
      className="w-full mb-4 bg-gray-200 p-2 rounded shadow-sm"
    />
  );
}
