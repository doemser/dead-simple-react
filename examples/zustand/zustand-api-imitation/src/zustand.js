import { useState, useEffect } from "react";

export default function create(initialState) {
  const store = createStore(initialState);

  function createStore(initialState) {
    let state;
    const listeners = new Set();
    const setState = (partial) => {
      const newState = typeof partial === "function" ? partial(state) : partial;
      state = { ...state, ...newState };
      listeners.forEach((listener) => listener(state));
    };
    const getState = () => state;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = listeners.clear();
    const api = { setState, getState, subscribe, destroy };
    state = initialState(setState, getState, api);
    return api;
  }

  function useStore(selector = (state) => state) {
    const [state, setState] = useState(() => selector(store.getState()));

    useEffect(
      () => store.subscribe((state) => setState(() => selector(state))),
      [selector]
    );

    return state;
  }

  useStore.setState = store.setState;
  useStore.getState = store.getState;
  useStore.api = store.api;

  return useStore;
}
