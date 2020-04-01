import React from "react";
import Console from './../Containers/Console'
import MethodChecklist from './../Containers/MethodChecklist'
import MethodDescription from './../Containers/MethodDescription'
import MethodCounters from './../Containers/MethodCounters'
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
