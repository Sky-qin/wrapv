// 暴露组件
import TestTable from './src/TestTable'
TestTable.install = vue => {
  vue.component(TestTable.name, TestTable)
}
export default TestTable