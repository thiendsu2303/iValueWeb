import Home from '~/pages/Home';
import gioithieu from '~/pages/gioithieu';
import dichvu from '~/pages/dichvu';
import duan from '~/pages/duan';
import lienhe from '~/pages/lienhe';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioithieu', component: gioithieu },
    { path: '/dichvu', component: dichvu },
    { path: '/duan', component: duan },
    { path: '/lienhe', component: lienhe },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
