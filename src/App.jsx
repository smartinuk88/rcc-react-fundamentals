import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedConcept, setSelectedConcept] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedConcept(selectedButton.toLowerCase());
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
