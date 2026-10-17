import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}

export function FadeIn({ children, className }: MotionProps) {
  return <div className={className}>{children}</div>;
}
