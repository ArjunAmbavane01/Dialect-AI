import React from "react";

const TextArea = ({ id, value, onChange, placeholder }) => {
  return (
    <textarea
      id={id}
      rows={7}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg bg-neutral-900 dark:border-transparent dark:text-white resize-none scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-800"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
