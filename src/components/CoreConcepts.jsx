import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
