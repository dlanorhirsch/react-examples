import React from "react";

function AppJsArrayCodeEx() {
    return (
      <div>
      <div className="header-tab">App.js (parent)</div>
<pre className = "codeExs">{`
import React from 'react';

function App() {
  return (
    <div>
      <h4>Passing an array as props</h4>
    </div>
    <div className = "examples">
      <ArrayChildCode names = {["Larry", "Curly", "Mo"]};
    </div>
    </div>
  )
}

export default App

`}
</pre>
       </div>
    )
}

export default AppJsArrayCodeEx