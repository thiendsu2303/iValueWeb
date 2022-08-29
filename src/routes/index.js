import Home from '~/pages/Home';
import gioithieu from '~/pages/gioithieu';
import dichvu from '~/pages/dichvu';
import duan from '~/pages/duan';
import lienhe from '~/pages/lienhe';
import tintuc from '~/pages/tintuc';
import tintuc1 from '~/pages/tintuc/tintuc1';
import tintuc2 from '~/pages/tintuc/tintuc2';
import tintuc3 from '~/pages/tintuc/tintuc3';
import tintuc4 from '~/pages/tintuc/tintuc4';
import tintuc5 from '~/pages/tintuc/tintuc5';

const publicRoutes = [
    { path: '/', component: Home, layout: Home },
    { path: '/gioi-thieu', component: gioithieu, layout: gioithieu },
    { path: '/dich-vu', component: dichvu, layout: dichvu },
    { path: '/du-an', component: duan, layout: duan },
    { path: '/lien-he', component: lienhe, layout: lienhe },
    { path: '/tin-tuc', component: tintuc, layout: tintuc },
    { path: '/tin-tuc-1', component: tintuc1, layout: tintuc1 },
    { path: '/tin-tuc-2', component: tintuc2, layout: tintuc2 },
    { path: '/tin-tuc-3', component: tintuc3, layout: tintuc3 },
    { path: '/tin-tuc-4', component: tintuc4, layout: tintuc4 },
    { path: '/tin-tuc-5', component: tintuc5, layout: tintuc5 },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
