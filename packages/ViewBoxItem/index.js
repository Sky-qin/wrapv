// 暴露组件
import ViewBoxItem from './src/ViewBoxItem'
ViewBoxItem.install = vue => {
  vue.component(ViewBoxItem.name, ViewBoxItem)
}
export default ViewBoxItem