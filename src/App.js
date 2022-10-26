import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
