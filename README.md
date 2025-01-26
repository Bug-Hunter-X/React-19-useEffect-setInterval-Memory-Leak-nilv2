# React 19 useEffect setInterval Memory Leak

This example demonstrates a common mistake when using `setInterval` within a `useEffect` hook in React 19.  Forgetting to clear the interval in the cleanup function can lead to memory leaks. The solution shows the proper way to handle this.