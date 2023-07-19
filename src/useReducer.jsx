import { useCallback } from "react";
import meta from "../package.json";
import useLocalStorageState from "use-local-storage-state";

export const useReducer = (reducer, initState) => {
  const [state, setState] = useLocalStorageState(`${meta.name}/data`, {
    defaultValue: initState,
  });

  // https://medium.com/@manojsinghnegi/react-custom-hooks-lets-implement-our-own-usereducer-fb166ca9dd96
  const dispatch = useCallback(
    (action) => {
      const nextState = reducer(state, action);
      console.log("state=", state, "=>", nextState);
      setState(nextState);
    },
    [setState, state, reducer]
  );

  return [state, dispatch];
};
