import useLocalStorage from "./useLocalStorage";

const useSwitchState = (stateKey, initialValue) => {
  const [state, setState] = useLocalStorage(stateKey, initialValue);

  const handleStateChange = () => {
    setState(!state);
    console.log(state);
  };

  return [state, handleStateChange];
};

export default useSwitchState;
