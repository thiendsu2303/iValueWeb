import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { DefaultLayout } from '~/components/Layout';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <DefaultLayout />
        </div>
    );
}

export default Home;
