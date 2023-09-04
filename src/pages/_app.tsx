import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Login from './login/Login';
import Dashboard from './Dashboard/Dashboard';

// Define route configurations
const routeConfigurations: any = {
  '/': Login, // Default route (Login)
  '/login': Login, // Login page
  '/dashboard': Dashboard, // Dashboard page
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const routeKey = router.asPath;

  // Determine which component to render based on the route
  const ComponentToRender = routeConfigurations[routeKey] || Component;

  return <ComponentToRender {...pageProps} />
}
