import Home from "../components/pages/Home";
import Desserts from "../components/pages/Desserts";
import Recipes from "../components/pages/Recipes";
import SavedRecipes from "./pages/SavedRecipes";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Login/RegisterPage";
import ForgotPassword from "./Login/ForgotPassword";
import Addrecipe from "./pages/Addrecipe";
const Routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/Desserts", component: <Desserts /> },
  { path: "/Recipes", component: <Recipes /> },
  { path: "/Saved", component: <SavedRecipes /> },
  { path: "/Login", component: <LoginPage /> },
  { path: "/Register", component: <RegisterPage /> },
  { path: "/Forgotpassword", component: <ForgotPassword /> },
  { path: "/Addrecipe", component: <Addrecipe /> },
];

export default Routes;
