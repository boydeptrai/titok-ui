import { Link } from 'react-router-dom';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import routesConfig from '~/config/routes'
import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS =[
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title:'Language',
            data: [
                {   
                    type:'language',
                    code: 'en',
                    title:'English'
                },
                {
                    type:'language',
                    code: 'vi',
                    title:'Tiếng Việt'
                },
            ],
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]

const userMenu =[
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hue'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut
        } />,
        title: 'Log out',
        to: '/logout',
        separate: true
    },

]
function Header() {
    const currentUser = true;
    //handle logic
    const handleMenuChange =(menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    }
    
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div >
                    <Link to ={routesConfig.home} className={cx('logo')}><img src={images.logo} alt="Titok" /></Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                {currentUser ? (
                   <>
                     <Tippy delay={[0,200]} content="Upload video" placement="bottom">
                         <button className={cx('action-btn')}>
                             <UploadIcon />
                         </button>
                     </Tippy>
                     <Tippy delay={[0,200]} content="Message" placement="bottom">
                         <button className={cx('action-btn')}>
                             <MessageIcon />
                         </button>
                     </Tippy>
                     <Tippy delay={[0,200]} content="Inbox" placement="bottom">
                         <button className={cx('action-btn')}>
                             <InboxIcon />
                             <span className={cx('badge')}>12</span>
                         </button>
                     </Tippy>
                   </>
                ) : (
                    
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}
                <Menu
                    items = {currentUser ? userMenu : MENU_ITEMS} 
                    onChange = {handleMenuChange}
                >
                {currentUser ? (
                    <Image 
                    className={cx('user-avatar')} 
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f0120b47e994beed767440b99f750432.jpeg?x-expires=1655258400&x-signature=k42tlh0pXUBlbQvcE52opndySQI%3D"
                    alt ="Nguyen Kim Hue"
                    fallback= "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/284071538_2533878736742536_1267785679483814833_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=wZa2pEs_ndwAX-y8PCz&_nc_ht=scontent.fdad2-1.fna&oh=00_AT-yZQlXk37uZQRLhNpFMGy7IfL0QACcSaQ4k5B1kAh6yg&oe=62AEC079"
                    />
                    
                ) : (
                    <button className={cx('more-button')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>

                )}  
                </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
