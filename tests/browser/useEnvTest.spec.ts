import { test } from "@playwright/test";
import { environments } from "../../config/env";

test("Example", async ({ page }, testInfo) => {
  const env = environments[testInfo.project.name as keyof typeof environments];

  await page.goto(env.ITEM_URL);
});
