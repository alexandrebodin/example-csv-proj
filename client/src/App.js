import {
  Provider,
  defaultTheme,
  Grid,
  View,
  ListBox,
  Item,
  Link,
} from "@adobe/react-spectrum";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Data from "./pages/Data";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Grid
            areas={["header  header", "sidebar content", "footer  footer"]}
            columns={["1fr", "4fr"]}
            rows={["size-700", "auto", "size-700"]}
            height="100vh"
          >
            <View
              backgroundColor="gray-200"
              gridArea="header"
              padding="size-100"
            >
              Header
            </View>
            <View
              backgroundColor="gray-50"
              padding="size-250"
              gridArea="sidebar"
            >
              <nav>
                <ul>
                  <li>
                    <Link>
                      <RouteLink to="/">Home</RouteLink>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <RouteLink to="/data">Data</RouteLink>
                    </Link>
                  </li>
                </ul>
              </nav>
            </View>
            <View
              gridArea="content"
              padding="size-1000"
            >
              <Switch>
                <Route path="/data">
                  <Data />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
            </View>
            <View
              backgroundColor="gray-200"
              gridArea="footer"
              padding="size-100"
            >
              Footer
            </View>
          </Grid>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
