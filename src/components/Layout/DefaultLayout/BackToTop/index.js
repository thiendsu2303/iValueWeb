import classNames from 'classnames/bind';
import styles from './BackToTop.module.scss';

const cx = classNames.bind(styles);

function BackToTop() {
    const afterScroll = () => {
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY >= 5) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    };
    window.addEventListener('scroll', afterScroll);
    return (
        <a id="back-to-top" href="#" className={cx('btn', 'btn-primary', 'btn-lg', 'back-to-top')} role="button">
            <span className={cx('glyphicon', 'glyphicon-chevron-up')}></span>
        </a>
    );
}

export default BackToTop;
