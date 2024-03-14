"use client";
import { createContext, useRef, useState } from "react";

export const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const [enableElementor, setEnableElementor] = useState(false);
  const [enableCompatibilityCheck, setEnableCompatibilityCheck] =
    useState(false);

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

  const [elementorDetails, setElementorDetails] = useState({
    elementorMinimumVersion: "3.0.0",
    phpMinimumVersion: "7.2",
    elementorTested: "3.20.1",
    elementorProTested: "3.20.0",
  });

  const handleElementorDetails = (inputData) =>
    setElementorDetails({ ...elementorDetails, ...inputData });

  return (
    <StateContext.Provider
      value={{
        pluginDetails,
        handlePluginDetails,
        codeRef,
        code: codeRef.current,
        enableElementor,
        setEnableElementor,
        enableCompatibilityCheck,
        setEnableCompatibilityCheck,
        elementorDetails,
        handleElementorDetails,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
