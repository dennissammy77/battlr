import Home from "./pages/Home";
import MyBotArmy from "./pages/MyBotArmy";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/myarmy",
        element: <MyBotArmy />
    }
];

export default routes;