// 暴露组件
import TestButton from './src/TestButton'
TestButton.install = vue => {
  vue.component(TestButton.name, TestButton)
}
export default TestButton