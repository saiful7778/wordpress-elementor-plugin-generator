"use client";
import { createContext, useRef, useState } from "react";

export const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const codeRef = useRef();
  const [pluginDetails, setPluginDetails] = useState({
    pluginName: "",
    description: "",
    pluginURI: "",
    version: "0.0.1",
    requireAtLeast: "5.2",
    requiresPHP: "7.2",
    author: "",
    authorURI: "",
    license: "",
    licenseURI: "",
    updateURI: "",
    textDomain: "",
    domainPath: "",
  });

  const handlePluginDetails = (inputData) =>
    setPluginDetails({ ...pluginDetails, ...inputData });

  return (
    <StateContext.Provider
      value={{
        pluginDetails,
        handlePluginDetails,
        codeRef,
        code: codeRef.current,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
