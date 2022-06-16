import classNames from 'classnames/bind';
import styles from './tintuc.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Banner from '~/components/Layout/DefaultLayout/Banner';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import Footer from '~/components/Layout/DefaultLayout/Footer';

const cx = classNames.bind(styles);

function tintuc() {
    return (
        <div className={cx('tintucDiv')}>
            <Header/>
            <Banner content = 'TIN TỨC' />

            <div className={cx('clear40')}></div>

            <div className = {cx('block-news')}>
                <div className = {cx('container')}>
                    <div className = {cx('row', 'row-news')}>
                        <div className = {cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className = {cx('item-news', 'item-normal')}>
                                <div className = {cx('item-wrap')}>
                                    <div className = {cx('item-thumb')}>
                                        <a href="#"><img src="https://img.lovepik.com/background/20211022/medium/lovepik-small-fresh-summer-beach-taobao-cartoon-promotion-background-image_605600456.jpg" alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "/></a>
                                        <div className= {cx("type-news")}>
                                            <a href="/vi/news/su-kien-noi-bat-c22.html">
                                                Tin Tức Nổi Bật        
                                            </a>
                                        </div>
                                    </div>

                                    <div className= {cx("caption-item")}>
                                        <h4>
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html"> First news </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className= {cx("read-more")}>
                                        <div className= {cx("date")}>
                                            <span> 28/05/2003</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className = {cx('item-news', 'item-normal')}>
                                <div className = {cx('item-wrap')}>
                                    <div className = {cx('item-thumb')}>
                                        <a href="#"><img src="https://img.lovepik.com/background/20211022/medium/lovepik-small-fresh-summer-beach-taobao-cartoon-promotion-background-image_605600456.jpg" alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "/></a>
                                        <div className= {cx("type-news")}>
                                            <a href="/vi/news/su-kien-noi-bat-c22.html">
                                                Tin Tức Nổi Bật          
                                            </a>
                                        </div>
                                    </div>

                                    <div className= {cx("caption-item")}>
                                        <h4>
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html"> First news </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className= {cx("read-more")}>
                                        <div className= {cx("date")}>
                                            <span> 28/05/2003</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className = {cx('item-news', 'item-normal')}>
                                <div className = {cx('item-wrap')}>
                                    <div className = {cx('item-thumb')}>
                                        <a href="#"><img src="https://img.lovepik.com/background/20211022/medium/lovepik-small-fresh-summer-beach-taobao-cartoon-promotion-background-image_605600456.jpg" alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "/></a>
                                        <div className= {cx("type-news")}>
                                            <a href="/vi/news/su-kien-noi-bat-c22.html">
                                                Tin Tức Nổi Bật          
                                            </a>
                                        </div>
                                    </div>

                                    <div className= {cx("caption-item")}>
                                        <h4>
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html"> First news </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className= {cx("read-more")}>
                                        <div className= {cx("date")}>
                                            <span> 28/05/2003</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className = {cx('item-news', 'item-normal')}>
                                <div className = {cx('item-wrap')}>
                                    <div className = {cx('item-thumb')}>
                                        <a href="#"><img src="https://img.lovepik.com/background/20211022/medium/lovepik-small-fresh-summer-beach-taobao-cartoon-promotion-background-image_605600456.jpg" alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "/></a>
                                        <div className= {cx("type-news")}>
                                            <a href="/vi/news/su-kien-noi-bat-c22.html">
                                                Tin Tức Nổi Bật         
                                            </a>
                                        </div>
                                    </div>

                                    <div className= {cx("caption-item")}>
                                        <h4>
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html"> First news </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className= {cx("read-more")}>
                                        <div className= {cx("date")}>
                                            <span> 28/05/2003</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className = {cx('item-news', 'item-normal')}>
                                <div className = {cx('item-wrap')}>
                                    <div className = {cx('item-thumb')}>
                                        <a href="#"><img src="https://img.lovepik.com/background/20211022/medium/lovepik-small-fresh-summer-beach-taobao-cartoon-promotion-background-image_605600456.jpg" alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "/></a>
                                        <div className= {cx("type-news")}>
                                            <a href="/vi/news/su-kien-noi-bat-c22.html">
                                                Tin Tức Nổi Bật         
                                            </a>
                                        </div>
                                    </div>

                                    <div className= {cx("caption-item")}>
                                        <h4>
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html"> First news </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className= {cx("read-more")}>
                                        <div className= {cx("date")}>
                                            <span> 28/05/2003</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className = {cx('item-news', 'item-normal')}>
                                <div className = {cx('item-wrap')}>
                                    <div className = {cx('item-thumb')}>
                                        <a href="#"><img src="https://img.lovepik.com/background/20211022/medium/lovepik-small-fresh-summer-beach-taobao-cartoon-promotion-background-image_605600456.jpg" alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "/></a>
                                        <div className= {cx("type-news")}>
                                            <a href="/vi/news/su-kien-noi-bat-c22.html">
                                                Tin Tức Nổi Bật        
                                            </a>
                                        </div>
                                    </div>

                                    <div className= {cx("caption-item")}>
                                        <h4>
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html"> First news </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className= {cx("read-more")}>
                                        <div className= {cx("date")}>
                                            <span> 28/05/2003</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('clear40')}></div>
            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default tintuc;
