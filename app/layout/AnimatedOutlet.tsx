import { useOutlet } from "react-router";
import { useState } from "react";

function AnimatedOutlet() {
  const [outlet] = useState(useOutlet());
  return outlet;
}

export default AnimatedOutlet;
