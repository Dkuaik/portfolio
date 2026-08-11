import { atom } from "nanostores";

export const swarmTriggerStore = atom(0);

export function triggerSwarm(): void {
  swarmTriggerStore.set(swarmTriggerStore.get() + 1);
}
