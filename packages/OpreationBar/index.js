// 暴露组件
import OpreationBar from './src/OpreationBar'
OpreationBar.install = vue => {
    vue.component(OpreationBar.name, OpreationBar)
}
export default OpreationBar