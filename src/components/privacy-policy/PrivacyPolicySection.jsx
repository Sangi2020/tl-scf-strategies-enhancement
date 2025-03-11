"use client";
import React, { useEffect } from "react";
import parse, { domToReact } from "html-react-parser";
import usePrivacyStore from "@/store/usePrivacyStore";

const PrivacyPolicySection = () => {
  const { title, content, fetchPrivacy } = usePrivacyStore();

  useEffect(() => {
    fetchPrivacy();
  }, [fetchPrivacy]);

  // Function to inject Tailwind CSS styles into parsed HTML elements
  const addCustomStyles = (htmlContent) => {
    return parse(htmlContent, {
      replace: (domNode) => {
        if (!domNode.attribs) return;

        const commonProps = { className: "" };

        switch (domNode.name) {
          case "h1":
            commonProps.className = "text-3xl md:text-4xl font-bold text-center text-gray-900 my-4";
            break;
          case "h2":
            commonProps.className = "text-2xl font-semibold text-gray-800 my-3";
            break;
          case "h3":
            commonProps.className = "text-xl font-medium text-gray-700 my-2";
            break;
          case "p":
            commonProps.className = "text-gray-600 leading-relaxed my-2";
            break;
          case "ul":
            commonProps.className = "list-disc list-inside text-gray-600 my-3";
            break;
          case "ol":
            commonProps.className = "list-decimal list-inside text-gray-600 my-3";
            break;
          case "li":
            commonProps.className = "pl-4 my-1";
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
    <div className="mb-8 last:mb-0 w-full max-w-5xl mx-auto">
      <div>
        {/* <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4 pb-2">
          {title}
        </h2> */}
        <div className="text-gray-700 space-y-3 pl-1">
          {content ? addCustomStyles(content) : <p>Loading...</p>}
          <div className="border-b pt-2 border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
