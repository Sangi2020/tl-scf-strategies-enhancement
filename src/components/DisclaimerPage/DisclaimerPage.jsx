"use client";
import React, { useEffect } from "react";
import parse, { domToReact } from "html-react-parser";
import useDisclaimer from "@/store/useDisclaimer";


const DisclaimerPage = () => {
  const { title, content, fetchDisclaimer } = useDisclaimer();

  useEffect(() => {
    fetchDisclaimer();
  }, [fetchDisclaimer]);

  // Function to apply Tailwind styles dynamically
  const addCustomStyles = (htmlContent) => {
    return parse(htmlContent, {
      replace: (domNode) => {
        if (!domNode.attribs) return;

        const commonProps = { className: "" };

        switch (domNode.name) {
          case "h1":
            commonProps.className = "text-3xl font-bold text-gray-900 mb-4";
            break;
          case "h2":
            commonProps.className = "text-2xl font-semibold text-gray-800 my-3";
            break;
          case "h3":
            commonProps.className = "text-xl font-medium text-gray-700 my-2";
            break;
          case "p":
            commonProps.className = "text-base text-gray-700 leading-relaxed mb-2";
            break;
          case "ul":
            commonProps.className = "list-disc pl-5 leading-relaxed text-gray-700 my-3";
            break;
          case "ol":
            commonProps.className = "list-decimal pl-5 leading-relaxed text-gray-700 my-3";
            break;
          case "li":
            commonProps.className = "pl-2 mb-1 text-gray-600";
            break;
          case "a":
            commonProps.className = "text-blue-600 underline hover:text-blue-800";
            break;
          case "strong":
            commonProps.className = "font-bold text-gray-900";
            break;
          case "em":
            commonProps.className = "italic text-gray-700";
            break;
          case "blockquote":
            commonProps.className = "border-l-4 border-gray-400 pl-4 italic text-gray-700 my-3";
            break;
          case "code":
            commonProps.className = "bg-gray-200 p-1 rounded text-sm font-mono";
            break;
          default:
            return;
        }

        return React.createElement(domNode.name, commonProps, domToReact(domNode.children));
      },
    });
  };

  return (
    <div className="mb-8 last:mb-0 w-full max-w-5xl mx-auto py-10">
      <div>
      
        <div className="text-gray-700 space-y-3 pl-1">
          {content ? addCustomStyles(content) : <p>Loading...</p>}
          <div className="border-b pt-2 border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
