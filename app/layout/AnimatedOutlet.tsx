import { useOutlet } from "@remix-run/react";
import { useState } from "react";

function AnimatedOutlet() {
  const [outlet] = useState(useOutlet());
  return outlet;
}

export default AnimatedOutlet;
