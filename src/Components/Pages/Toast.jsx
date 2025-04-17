import React, { useEffect } from "react";
import toast from "../Images/Parth/toast.svg";

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-28 right-4 bg-[#DBE6D6]  text-green-700 px-4 py-5 rounded-md shadow-md flex items-center space-x-3 z-50 me-5">
      <img src={toast} alt="check" className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}