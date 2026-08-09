import { useMotionValue, useMotionValueEvent, type MotionValue } from "motion/react";


export function trackMonotonicMax(previousMax: number, latest: number): number {
  return latest > previousMax ? latest : previousMax;
}

export function useMonotonicProgress(source: MotionValue<number>): MotionValue<number> {
  const output = useMotionValue(source.get());
  useMotionValueEvent(source, "change", (latest) => {
    output.set(latest === 0 ? 0 : trackMonotonicMax(output.get(), latest));
  });
  return output;
}
