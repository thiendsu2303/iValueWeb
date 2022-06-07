import { DefaultLayout } from '~/components/Layout';
import classNames from 'classnames/bind';
import styles from './duan.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';

const cx = classNames.bind(styles);

function duan() {
    return (
        <div>
            <Header />
            <div className={cx('bannerPage')}>
                <img
                    src={
                        'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-summer-outdoor-scene-banner-image_249780.jpg'
                    }
                    className={cx('bannerImage')}
                />
                <h3 className={cx('titleLienHe')}>Dự án</h3>
            </div>
        </div>
    );
}

export default duan;
