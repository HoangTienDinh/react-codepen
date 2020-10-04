import { useEffect, useState } from "react";

const PREFIX = 'codepen-clone-';

const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key
    
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
    })
  return (
  <div></div>
    );
};

export default useLocalStorage;
