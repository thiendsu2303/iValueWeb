import classNames from 'classnames/bind';
import styles from './tintuc.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';

const cx = classNames.bind(styles);

function tintuc() {
    return (
        <div className={cx('test')}>
            <Header />
            Tin tuc page
        </div>
    );
}

export default tintuc;
