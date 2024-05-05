import React, { createContext, useContext, useRef, useState } from "react";

const DashboardContext = createContext({});

const expressions = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"];

const DashboardContextProvider = ({children}) => {
  const [loadedModels, setLoadedModels] = useState(false);
  const [mountedVideoComponent, setMountedVideoComponent] = useState(false);
  const [currentExpression, setCurrentExpression] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [recordedExpressions, setRecordedExpressions] = useState([]);
  const [recordedExpressionsVisible, setRecordedExpressionsVisible] = useState(false);
  const canvasRef = useRef();

  const contextValue = {
    loadedModels, setLoadedModels,
    mountedVideoComponent, setMountedVideoComponent,
    currentExpression, setCurrentExpression,
    emoji, setEmoji,
    recordedExpressions, setRecordedExpressions,
    recordedExpressionsVisible, setRecordedExpressionsVisible,
    canvasRef
  };

  return(
    <DashboardContext.Provider value={contextValue}>
      {children}
    </DashboardContext.Provider>
  );
};

const DashboardContextConsumer = ({children}) => {
  return(
    <DashboardContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error("Error: useDashboardContext() can only be used inside of DashboardContext.");
        }
        return children(context);
      }}
    </DashboardContext.Consumer>
  );
};

const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("Error: useDashboardContext() can only be used inside of DashboardContext.");
  }
  return context;
};
export const DashboardProvider = ({ children }) => {
  const [testRun, setTestRun] = useState(0);
  const [otherState, setOtherState] = useState(); // your other states

  return (
    <DashboardContext.Provider value={{ testRun, setTestRun, otherState, setOtherState }}>
      {children}
    </DashboardContext.Provider>
  );
};

export {
  DashboardContextProvider,
  DashboardContextConsumer,
  useDashboardContext,
  expressions,
};