// SocialButton.js
import React from 'react';

export default function SocialButton({ icon: Icon, label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full p-3 border border-gray-600 rounded-md bg-dark-gray text-white hover:bg-gray-700"
    >
      <Icon className="text-white" />
      <span className="flex-grow text-center">{label}</span>
    </a>
  );
}
