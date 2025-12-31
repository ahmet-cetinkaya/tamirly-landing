/* eslint-disable no-console */
import { chromium } from "playwright";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

async function takeScreenshot() {
  console.log("🚀 Starting screenshot process...");

  // 1. Start dev server in background
  console.log("✨ Starting dev server...");
  const devServer = spawn("bun", ["run", "landing:dev"], {
    stdio: "inherit",
    detached: true,
  });

  // Ensure we kill the dev server on exit
  process.on("exit", () => {
    process.kill(-devServer.pid!);
  });

  // 2. Wait for server to be ready
  console.log("⏳ Waiting for server to be ready on http://localhost:4321...");
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch("http://localhost:4321");
      if (res.ok) {
        ready = true;
        break;
      }
    } catch {
      // Ignore
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  if (!ready) {
    console.error("❌ Server timed out");
    process.exit(1);
  }

  // 3. Launch browser and take screenshot
  console.log("📸 Capturing screenshot...");
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport for a larger screenshot
  await page.setViewportSize({ width: 1440, height: 1200 });

  await page.goto("http://localhost:4321");

  // Force dark mode
  await page.evaluate(() => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  });

  // Wait for animations (AnimatedSection)
  await page.waitForTimeout(2000);

  const assetsDir = path.join(process.cwd(), "docs", "assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  const outputPath = path.join(assetsDir, "landing-preview.png");

  // Capture more height (Navbar + Hero + some features)
  await page.screenshot({
    path: outputPath,
    clip: { x: 0, y: 0, width: 1440, height: 1040 },
  });

  console.log(`✅ Screenshot saved to: ${outputPath}`);

  await browser.close();
  process.exit(0);
}

takeScreenshot().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
