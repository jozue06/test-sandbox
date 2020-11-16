import React from "react";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import Form from "../src/components/form/form";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      {/* <h2>Start editing to see some magic happen!</h2> */}
      {/* <main>
          <div className="App"></div>
      </main> */}
      <Footer />
    </div>
  );
}
