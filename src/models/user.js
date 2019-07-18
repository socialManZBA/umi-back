
// user 的 model
export default {
    namespace: 'user',
  
    state: {
      userName: '坑货',
    },
// 异步的请求
    effects: {
      *login(action,{put}) {
         let response = yield fetch("http://localhost:9090/user",{
          method: 'POST',
          body: JSON.stringify(action.values),
          headers: {
            "Content-Type": "application/json",
          }
        });
        let res = yield response.json();
        yield put({
          type: 'setUserName',
          name: res.username
        })
      }
    },
    reducers: {
      setUserName(state, action) {
        return { ...state, ...{ userName: action.name } };
      },
    },
    // reducers: {
    //   setUserName(state,action) {
    //     return {...state,...{username:action.name}}
    //   }
    // }
  };