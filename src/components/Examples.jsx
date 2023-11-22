import { useState } from "react";
import TabButton from "./TabButton/TabButton";
import { EXAMPLES, CORE_CONCEPTS } from "../data";

function Examples() {
  const [selectedConcept, setSelectedConcept] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedConcept(selectedButton.toLowerCase());
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {CORE_CONCEPTS.map((concept) => (
          <TabButton
            key={concept.title.toLowerCase()}
            isSelected={selectedConcept === concept.title.toLowerCase()}
            onSelect={() => handleSelect(concept.title)}
          >
            {concept.title}
          </TabButton>
        ))}
      </menu>
      {!selectedConcept && <p>Please select a concept</p>}
      {selectedConcept && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedConcept].title}</h3>
          <p>{EXAMPLES[selectedConcept].description}</p>
          <pre>
            <code>{EXAMPLES[selectedConcept].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}

export default Examples;
