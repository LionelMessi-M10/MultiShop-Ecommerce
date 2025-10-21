import { useState } from 'react';
import Hello from '@components/Hello/Hello';

function App() {
  const [name, setName] = useState("Huy");

  return <>
    <Hello />
  </>;
}

export default App;
