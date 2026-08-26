import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import PublicLayout from '@/components/layout/PublicLayout';
import AdminLayout from '@/components/layout/AdminLayout';

import Home from '@/pages/Home';
import Report from '@/pages/Report';
import Success from '@/pages/Success';
import Advisory from '@/pages/Advisory';
import Search from '@/pages/Search';
import Status from '@/pages/Status';
import About from '@/pages/About';

import AdminDashboard from '@/pages/AdminDashboard';
import AdminReview from '@/pages/AdminReview';
import AdminEditor from '@/pages/AdminEditor';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* ADMIN ROUTES */}
      <Route path="/admin/:rest*">
        <AdminLayout>
          <Switch>
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/admin/review/:id" component={AdminReview} />
            <Route path="/admin/editor/:id" component={AdminEditor} />
            <Route component={NotFound} />
          </Switch>
        </AdminLayout>
      </Route>

      {/* PUBLIC ROUTES */}
      <Route>
        <PublicLayout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/report" component={Report} />
            <Route path="/success" component={Success} />
            <Route path="/advisory/:id" component={Advisory} />
            <Route path="/search" component={Search} />
            <Route path="/status" component={Status} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </PublicLayout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
