import { useLocation } from "@remix-run/react";
import { useRef } from "react";
import AnimatedOutlet from "./AnimatedOutlet";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Layout() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div className="mx-auto grid min-h-screen place-items-center">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={500}
          nodeRef={nodeRef}
          classNames={{
            enter: "opacity-0",
            enterActive: "opacity-100",
            exitActive: "opacity-0",
          }}
        >
          <div ref={nodeRef} className="transition-all duration-500">
            <AnimatedOutlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
