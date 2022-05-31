import classNames from 'classnames/bind';
import styles from './FeedBack.module.scss';

const cx = classNames.bind(styles);

const FeedBack = ({content, image, name}) => {
    return (
        <div className={cx('owl-item', 'cloned')}>
            <div className={cx('item-kh')}>
                <div className={cx('img-avatar')}>
                    <img src={image}></img>
                </div>
                <div className={cx('rating')}>
                    <span className={cx('fa fa-star', 'checked')}></span>
                    <span className={cx('fa fa-star', 'checked')}></span>
                    <span className={cx('fa fa-star', 'checked')}></span>
                    <span className={cx('fa fa-star', 'checked')}></span>
                </div>
                <div className={cx('des-kh')}> {content} </div>
                <p className={cx('name-kh')}>{name}</p>
            </div>
        </div>
    )
}

export default FeedBack;