import Home from '~/pages/Home';
import gioithieu from '~/pages/gioithieu';
import dichvu from '~/pages/dichvu';
import duan from '~/pages/duan';
import lienhe from '~/pages/lienhe';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gioi-thieu', component: gioithieu },
    { path: '/dich-vu', component: dichvu },
    { path: '/du-an', component: duan },
    { path: '/lien-he', component: lienhe },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
