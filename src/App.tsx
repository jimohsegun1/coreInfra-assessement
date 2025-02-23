import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import AppLayout from "./layouts/AppLayout";
import CardRequestProvider from "./contexts/CardRequestContext";
import CardProfileProvider from "./contexts/CardProfileContext";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const CardProfile = lazy(() => import("./pages/card_profile/CardProfile"));
const CreateProfile = lazy(() => import("./pages/card_profile/CreateProfile"));
const EditProfile = lazy(() => import("./pages/card_profile/EditProfile"));
const CardRequest = lazy(() => import("./pages/card_request/CardRequest"));
const CardRequestDetails = lazy(
  () => import("./pages/card_request/CardRequestDetails")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader loaderDimensions="w-full h-svh" />}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route
            element={
              <CardProfileProvider>
                <Suspense fallback={<Loader loaderDimensions="w-full h-svh" />}>
                  <Outlet />
                </Suspense>
              </CardProfileProvider>
            }>
            <Route
              path="/card-profile"
              element={<CardProfile />}
            />
            <Route
              path="/card-profile/create"
              element={<CreateProfile />}
            />
            <Route
              path="/card-profile/edit/:id"
              element={<EditProfile />}
            />
          </Route>

          <Route
            element={
              <CardRequestProvider>
                <Suspense fallback={<Loader loaderDimensions="w-full h-svh" />}>
                  <Outlet />
                </Suspense>
              </CardRequestProvider>
            }>
            <Route
              path="/card-request/:id"
              element={<CardRequestDetails />}
            />
            <Route
              path="/card-request"
              element={<CardRequest />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
