import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import "./index.css";

async function enableMocking() {
  // Always on, including production builds: this app has no real backend,
  // MSW mocks are the only data source (e.g. the GitHub Pages demo deploy).
  const { worker } = await import("@/mocks/browser");
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
