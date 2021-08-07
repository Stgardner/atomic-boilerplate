import { AppPage, AppRouteCard } from "atomic"
import { todoListRoute } from "../routes/todo-routes";
const Home: React.FC = () => {
  return (
    <AppPage>
      <AppRouteCard {...todoListRoute}>
      </AppRouteCard>
    </AppPage>
  );
};

export default Home;
