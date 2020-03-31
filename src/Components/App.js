import React from "react";
import Console from './Console'
import MethodChecklist from './MethodChecklist'
import MethodDescription from './MethodDescription'
import MethodCounters from './MethodCounters'
import Header from './Header'

function App() {
  return (
    <section className="container">
      <Header />
      <div className="console-column">
      <Console />
      <MethodChecklist />
      </div>
      <MethodDescription />
      <MethodCounters />
    </section>
  );
}

export default App;
