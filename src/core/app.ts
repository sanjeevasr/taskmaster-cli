import { restartAsync } from "@/core/restart";

export function tm(option: string): void {
	console.log(`${option} selected !`);
	restartAsync();
}
