import { useState } from "react";

type TextAreaWithSuggestionProps = {
  defaultValue: string;
};
export const TextAreaWithSuggestion = ({
  defaultValue,
}: TextAreaWithSuggestionProps) => {
  const [entryText, setEntryText] = useState(defaultValue || "");

  const handleGenerateSuggestion = async () => {
    const response = await fetch("/generate-suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ entryText }),
    });

    if (response.ok) {
      const data = await response.json();
      setEntryText(entryText + " " + data.suggestion.content);
    } else {
      console.error("Failed to generate suggestion");
    }
  };

  return (
    <>
      <label>Content</label>
      <textarea
        className="h-[300px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="content"
        onChange={(e) => setEntryText(e.target.value)}
        value={entryText}
        placeholder="Enter content"
      ></textarea>
      {entryText && (
        <button
          type="button"
          onClick={handleGenerateSuggestion}
          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Generate Suggestion
        </button>
      )}
    </>
  );
};
