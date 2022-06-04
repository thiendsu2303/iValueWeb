import classNames from 'classnames/bind';
import styles from './gioithieu.module.scss';
import { DefaultLayout } from '~/components/Layout';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import PrincipalOperation from '../Home/OperatingPrincipal';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';

const cx = classNames.bind(styles);

function gioithieu() {
    return (
        <div>
            <Header />
            <hr />
            <PrincipalOperation />
            <hr />
            <Sponsor />
            <hr />
            <Footer />
        </div>
    );
}

export default gioithieu;
