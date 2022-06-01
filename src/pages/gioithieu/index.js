import classNames from 'classnames/bind';
import styles from './gioithieu.module.scss';
import { DefaultLayout } from '~/components/Layout';

const cx = classNames.bind(styles);

function gioithieu() {
    return (
        <div>
            <DefaultLayout />
        </div>
    );
}

export default gioithieu;
