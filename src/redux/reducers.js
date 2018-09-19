//包含多个reducer函数，由老的state和action，产生新的state，传给store
//引入combineReducers方法
import {combineReducers} from 'redux'
function xxx(state=0,action) {
  return state
}
function yyy(state={},action) {
  return state
}
//返回合并后的reducer函数
export default combineReducers({
  xxx,
  yyy
})