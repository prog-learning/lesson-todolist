import { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({ safetyRemove: true });
  console.log(state);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

// export const useHook = () => {
//   const [state, setstate] = useContext(TodoListContext);
//   return [state, setstate];
// };
