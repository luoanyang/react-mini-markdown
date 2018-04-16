# react-mini-markdown
一个react的简洁小巧的markdown组件

## 使用
1.下载react-mini-markdown
```
npm install react-mini-markdown --save
```
2.在代码中引入react-mini-markdown
```
import Markdown from 'react-mini-markdown';
import React,{Component} from 'react';

class Demo extends Component{
  getMarkDownContent(text){
    console.log(text);
  }
  render(){
    return(
      <Markdown getContent={this.getMarkDownContent}/>
    )
  }
}
```

## API
API名 | 类型 | 说明
-|:-:|-
**getContent** | Function| 用来获取markdown组件的文本内容


## 效果图

![实际项目应用图](/source/1.png)
![全屏编辑](/source/2.png)
![全屏预览](/source/3.png)
![全屏编辑和预览](/source/4.png)
