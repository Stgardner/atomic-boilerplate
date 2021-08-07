import { AppRoute } from "atomic";
import { dashboardRoute } from "./dashboard-route";
import { todoRoutes } from "./todo-routes";

export const routes: AppRoute[] = [dashboardRoute, ...todoRoutes]