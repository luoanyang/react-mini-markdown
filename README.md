# react-mini-markdown
一个react的简洁小巧的markdown组件

## 使用
1.下载react-mini-markdown, **如出现bug，请下载最新版本**
```
npm install react-mini-markdown --save
```
2.在代码中引入react-mini-markdown
```
import Markdown from 'react-mini-markdown';
import React,{Component} from 'react';

class Demo extends Component{

  componentDidMount(){

    //设置markdown内容，不传入参数默认为空
    this.refs.MK.setContent('设置内容');
  }
  getMarkDownContent(text){

    //text为markdown的文本内容
    console.log(text);
  }
  render(){
    return(
      <Markdown refs='MK' getContent={this.getMarkDownContent} initContent='初始内容'/>
    )
  }
}
```

## API
API名 | 类型 | 说明
-|:-:|-
**getContent** | Function(arg)| 用来获取markdown组件的文本内容,**arg**为markdown的文本内容
**setContent** | Function(arg)| 用来设置markdown组件的文本内容,**arg**为markdown的文本内容，默认为空，使用方法见上面代码
**initContent** | String| 用来初始化markdown组件的文本内容


## 效果图

![实际项目应用图](/source/1.png)
![全屏编辑](/source/2.png)
![全屏预览](/source/3.png)
![全屏编辑和预览](/source/4.png)
