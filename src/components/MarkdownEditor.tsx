import React, { useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function MarkdownEditor(): ReactElement {
  const [markdown, setMarkdown] = useState("Type here");

  function handleChange(event) {
    setMarkdown(event?.target.value);
  }

  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-row flex-wrap py-4">
        <div className="w-1/2 p-3">
          <label className="form-label mb-2 inline-block text-gray-700">
            Example textarea
          </label>
          <textarea
            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            id="exampleFormControlTextarea1"
            rows={3}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="w-1/2 p-3">
          <article className="prose">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
