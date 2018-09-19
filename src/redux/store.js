//redux最核心的模块，所有状态均放在store中,通过createStore产生store,createStore方法中的参数为reduce函数
import {createStore} from 'redux'
//为了开发的时候能够使用调试工具，所以要引入一个库，
import {compos} from 'redux-devtools-extention'
import reducers from "./reducers";
export default createStore(reducers,)
