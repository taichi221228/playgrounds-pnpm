import { expect, test } from "vitest";
import { greet } from "./index";

test("say hello world", () => {
	expect(greet("World")).toBe("Hello, World!");
});
