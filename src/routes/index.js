import Home from '~/pages/Home';
import gioithieu from '~/pages/gioithieu';
import dichvu from '~/pages/dichvu';
import duan from '~/pages/duan';
import lienhe from '~/pages/lienhe';

const publicRoutes = [
    { path: '/', component: Home, layout: Home },
    { path: '/gioi-thieu', component: gioithieu, layout: gioithieu },
    { path: '/dich-vu', component: dichvu, layout: dichvu },
    { path: '/du-an', component: duan , layout: duan},
    { path: '/lien-he', component: lienhe, layout: lienhe },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
