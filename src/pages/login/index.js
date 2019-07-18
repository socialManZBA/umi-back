import styles from "./index.less";
import { Form, Button } from 'antd';
import { connect } from "dva"

 const login = (props) =>{
    //  console.log(props.form)
    let { getFieldDecorator } = props.form;
    return(
        <div className={styles.box}>
            <div className={styles.box_logo}>
                <a href="/">
                <h1>{props.username} - 我的天，你真骚</h1>
                </a>
                <span>登录-后台管理系统</span>
            </div>
            <Form className={styles.box_body}>
                <Form.Item>
                    {
                        getFieldDecorator("username",{
                            rules:[
                                { required: true, message: '请输入用户名' }
                            ]
                        })(
                            <div className={styles.form_group}>
                                <input type="text" name="username" placeholder="用户名" />
                            </div>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator("password",{
                            rules:[
                                { required: true, message: '请输入密码' }
                            ]
                        })(
                            <div className={styles.form_group}>
                                <input type="password" name="password" placeholder="密码" />
                            </div>
                        )
                    }
                </Form.Item>
                <Button  type="primary" block size="large" onClick={()=>{
                    props.handleLogin(props.form)
                    // console.log(props); //有小for买的属性，和下面定义的hangdleLogin方法和。。。
                }} >提交</Button>
            </Form>
        </div>





        // <div className={styles.box}>
        //     <div className={styles.box_logo}>
        //         <a href="/">
        //         <h1>骚比 - 我的天，你真骚</h1>
        //         </a>
        //         <span>登录-后台管理系统</span>
        //     </div>
        //     <div className={styles.box_body}>
        //         <div className={styles.form_group}>
        //             <input type="text" name="username" placeholder="用户名" />
        //         </div>
        //         <div className={styles.form_group}>
        //             <input type="password" name="password" placeholder="密码" />
        //         </div>
        //         <Button  type="primary" block size="large" >提交</Button>
        //     </div>
        // </div>
    )

} 
export default connect(
    (state)=>{
        return {
            username: state.user.userName
        }
    }, 
    (dispacth,props)=>{
        return {
            handleLogin:(form)=>{  //通过传过来的小form里面的属性，对表单进行校验
                console.log(form);
                form.validateFields((err, values) => {
                    // console.log(values)
                    if (err) {
                        alert(err)
                    }else{
                        // 2. dispatch 异步
                        // dispatch({ type: 'user/login', payload: values });
                        dispacth({
                            type: "user/login",
                            values
                        })
                    }
                })
            }   
        }
    }
)(Form.create(null)(login)); 