import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Learn with Sumit</h2>

      <Panel
        title="Paid Course"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ducimus
        sapiente omnis inventore ratione deserunt impedit accusamus et officia.
      </Panel>

      <Panel
        title="Free Course"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum aliquid
        sunt doloremque, voluptatem molestias sapiente qui nisi excepturi optio.
      </Panel>
    </>
  );
}
