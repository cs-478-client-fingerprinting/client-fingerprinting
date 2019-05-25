import React from "react";
import { Fade as RevealFade } from "react-reveal";
import { DURATION } from "../fingerprint-me/constants";

export const Fade = ({ children, when }) => (
  <RevealFade opposite when={when} duration={DURATION}>
    {children}
  </RevealFade>
);
