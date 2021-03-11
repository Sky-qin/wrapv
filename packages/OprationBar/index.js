// 暴露组件
import OprationBar from './src/OprationBar'
OprationBar.install = vue => {
    vue.component(OprationBar.name, OprationBar)
}
export default OprationBar