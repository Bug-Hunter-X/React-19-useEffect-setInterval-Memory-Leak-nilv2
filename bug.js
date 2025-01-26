```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The function passed to setInterval should return a cleanup function to prevent memory leaks.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    //Missing cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```