import create from "./zustand";

const useCountStore = create((set) => ({
  count: 1,
  addCount: () => {
    set((state) => ({ count: state.count + 1 }));
  }
}));

export default function App() {
  const count = useCountStore((state) => state.count);
  const addCount = useCountStore((state) => state.addCount);

  return (
    <button onClick={() => addCount()} style={{ fontSize: "x-large" }}>
      {count}
    </button>
  );
}
