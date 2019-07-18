import styles from './index.less';
import NavLink from 'umi/navlink';
const Menu = () => {
    return(
        <ul className={styles.wrap}>
            <li>
                <NavLink exact to="/" activeClassName={styles.active}>
                    系统首页
                </NavLink>                 
            </li>
            <li>
                <NavLink exact to="/student" activeClassName={styles.active}>
                    学生管理
                </NavLink>
            </li>
        </ul>
    )
}

export default Menu;
