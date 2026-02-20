import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/General/Home";
import About from "./pages/General/About";
import Pricing from "./pages/General/Pricing";
import Login from "./pages/General/Login";
import Register from "./pages/General/Register";
import Chat from "./pages/private/Chat";

// Layout
import PublicLayout from "./components/layouts/PublicLayout";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import Connection from "./pages/private/ConnectionPage";
import ProfileLayout from "./pages/private/ProfileLayout";
import ProfilePreview from "./components/ProfileStruc/Profile/ProfilePreview";
import ProfileEditForm from "./components/ProfileStruc/Profile/ProfileEditForm";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<PublicLayout />}>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private */}
          <Route
            path="/connection"
            element={
              <ProtectedRoute>
                <Connection />
              </ProtectedRoute>
            }
          />



          {/* Profile Nested Routes */}
          <Route
            // path="/profile"
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          >
            {/* Default: Profile Preview */}
            <Route index element={<ProfilePreview />} />

            {/* Edit Profile */}
            <Route path="edit" element={<ProfileEditForm />} />
          </Route>



          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






