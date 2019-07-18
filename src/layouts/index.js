import styles from './index.less';
import Header from "../component/header/index";
import Menu from "../component/menu/index";
// 基本布局
function BasicLayout(props) {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <Header/>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Menu/>
        </div>
        <div className={styles.right}>
          { props.children }
        </div>
      </div>
    </div>
  );
}
// 单页面布局
function SimpleLayout(props) {
  return (
    <div className={styles.content}>
      {props.children}
    </div>
  );
}

// export default BasicLayout;
export default function(props) {
  // console.log(props);
  if (props.location.pathname === '/login') {
    return <SimpleLayout {...props}/>
  }

  return (
    <BasicLayout {...props}/>
  );
}
