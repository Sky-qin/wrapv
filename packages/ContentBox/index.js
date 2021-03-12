// 暴露组件
import ContentBox from './src/ContentBox'
ContentBox.install = vue => {
    vue.component(ContentBox.name, ContentBox)
}
export default ContentBox