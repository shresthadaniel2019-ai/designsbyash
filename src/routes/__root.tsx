import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-wood-950">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-wood-950">Page not found</h2>
          <p className="mt-2 text-sm text-wood-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-wood-950">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-wood-600">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-wood-200 bg-white px-4 py-2 text-sm font-medium text-wood-950 transition-colors hover:bg-wood-50"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DesignsbyASH — Hand-Coded Websites for Canadian Businesses" },
      {
        name: "description",
        content:
          "DesignsbyASH is a Canadian web design agency crafting hand-coded websites for small businesses.",
      },
      { property: "og:title", content: "DesignsbyASH — Hand-Coded Websites for Canadian Businesses" },
      {
        property: "og:description",
        content: "Hand-Coded Websites for Canadian Businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "DesignsbyASH — Hand-Coded Websites for Canadian Businesses" },
      { name: "description", content: "DesignsbyASH Agency Site is a Canadian web design agency website built with React and TypeScript." },
      { property: "og:description", content: "DesignsbyASH Agency Site is a Canadian web design agency website built with React and TypeScript." },
      { name: "twitter:description", content: "DesignsbyASH Agency Site is a Canadian web design agency website built with React and TypeScript." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/127b667d-5928-4302-a3e5-a69467175919/id-preview-ec36721b--fc1eb12b-eb49-4897-898c-18b2e3caeb3d.lovable.app-1779211211118.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/127b667d-5928-4302-a3e5-a69467175919/id-preview-ec36721b--fc1eb12b-eb49-4897-898c-18b2e3caeb3d.lovable.app-1779211211118.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
