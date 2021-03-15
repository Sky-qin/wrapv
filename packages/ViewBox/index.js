// 暴露组件
import ViewBox from './src/ViewBox'
ViewBox.install = vue => {
  vue.component(ViewBox.name, ViewBox)
}
export default ViewBox