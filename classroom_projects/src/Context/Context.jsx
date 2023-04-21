import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export default function Context({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme((prevDarkmode) => !prevDarkmode);
  };
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
          {children}
        </ThemeUpdateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

// import { useContext } from "react";
// import { useReducer } from "react";
// import { createContext } from "react";
// import { btnReducer } from "./Reducers";

// const Btn = createContext();
// export default function Context() {
//   const [state, dispatch] = useReducer(btnReducer, [<button></button>]);
//   return (
//     <Btn.Provider value={{ state, dispatch }}>
//       <button>ADD</button>
//       <button>REMOVE</button>
//     </Btn.Provider>
//   );
// }

// export const BtnState = () => {
//   return useContext(Btn);
// };
