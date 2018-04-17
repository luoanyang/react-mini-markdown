import './iconfont.css';
import './markdown.css';
import './markdownTheme.css'
import React, {Component} from 'react';
import marked from 'marked';

class MarkDown extends Component {
  constructor(props){
    super(props)
    this.state = {
      markdownText: '',
      expandFlag: false,
      editFlag: '2'
    };
    this.getContent = this.props.getContent || '';
    this._changeEditFlag = this._changeEditFlag.bind(this);
    this._textChange = this._textChange.bind(this);
    this._textChange = this._textChange.bind(this);
    this._addText = this._addText.bind(this);
    this._title = this._title.bind(this);
    this._bold = this._bold.bind(this);
    this._italic = this._italic.bind(this);
    this._quote = this._quote.bind(this);
    this._orderedList = this._orderedList.bind(this);
    this._deorderedList = this._deorderedList.bind(this);
    this._link = this._link.bind(this);
    this._image = this._image.bind(this);
    this._code = this._code.bind(this);
    this._table = this._table.bind(this);
    this._expand = this._expand.bind(this);
  }

  componentDidMount(){
    this.text = document.getElementById('mk-textarea');
  }

  _changeEditFlag(e){
    this.setState({
      editFlag: e.currentTarget.dataset.number
    })
  }

  _textChange(e){
    let target = e.currentTarget;
    this.setState({
      markdownText: target.value
    });
    this.getContent(target.value);
  };

  _addText(text){
    let textArr = this.text.value.split('');
    textArr.splice(this.text.selectionStart, 0, text).join('');
    this.text.value = textArr.join('');
    this.setState({
      markdownText: this.text.value,
      selectIndex: textArr.length
    });
    this.getContent(this.text.value);
  };

  _title(){
    let html = '## 标题';
    this._addText(html);
  };

  _bold(){
    let html = '**加粗**';
    this._addText(html);
  };

  _italic(){
    let html = '*斜体*';
    this._addText(html);
  };

  _quote(){
    let html = '> 引用';
    this._addText(html);
  };

  _orderedList(){
    let html = '1. 有序列表\n2. 有序列表';
    this._addText(html);
  };

  _deorderedList(){
    let html = '- 无序列表\n- 无序列表';
    this._addText(html);
  };

  _link(){
    let html = '[标题](链接)';
    this._addText(html);
  };

  _image(){
    let html = '![标题](链接)';
    this._addText(html);
  };

  _code(){
    let html = '```\n代码 \n```';
    this._addText(html);
  };

  _table(){
    let html = `表头1 | 表头1 | 表头1\n- | :-: | -:\n内容1 | 内容2| 内容3\n内容1 | 内容2| 内容3\n内容1 | 内容2| 内容3`;
    this._addText(html);
  }

  _expand(){
    this.setState({
      expandFlag: !this.state.expandFlag
    })
  }

  render(){
    return (
      <div className={`markdown-wrap ${ this.state.expandFlag ? 'markdown-expand' : ''}`}>
        <div className="markdown-head">
          <ul className="left">
            <li><i className="iconfont icon-title" onClick={this._title}></i></li>
            <li><i className="iconfont icon-bold" onClick={this._bold}></i></li>
            <li><i className="iconfont icon-italic" onClick={this._italic}></i></li>
            <li><i className="iconfont icon-quote" onClick={this._quote}></i></li>
            <li><i className="iconfont icon-ordered-list" onClick={this._orderedList}></i></li>
            <li><i className="iconfont icon-disordered-list" onClick={this._deorderedList}></i></li>
            <li><i className="iconfont icon-link" onClick={this._link}></i></li>
            <li><i className="iconfont icon-image" onClick={this._image}></i></li>
            <li><i className="iconfont icon-code" onClick={this._code}></i></li>
            <li><i className="iconfont icon-table" onClick={this._table}></i></li>
          </ul>
          <ul className="right">
            <li><i className={`iconfont icon-expand ${ this.state.expandFlag ? 'clicked' : ''}`}
                   onClick={this._expand}></i></li>
            <li><i className={`iconfont icon-eye ${ this.state.editFlag === '1' ? 'clicked' : ''}`} data-number="1"
                   onClick={this._changeEditFlag}></i>
            </li>
            <li><i className={`iconfont icon-edit ${ this.state.editFlag === '2' ? 'clicked' : ''}`}
                   data-number="2" onClick={this._changeEditFlag}></i></li>
            <li><i className={`iconfont icon-pencil ${ this.state.editFlag === '3' ? 'clicked' : ''}`}
                   data-number="3" onClick={this._changeEditFlag}></i></li>
          </ul>
        </div>
        <div
          className={`markdown-body ${this.state.editFlag === '1' ? 'markdown-pen' : ''} ${this.state.editFlag === '3' ? 'markdown-eye' : ''}`}>
          <div className="markdown-edit-wrap">
            <textarea id="mk-textarea" onChange={this._textChange} onClick={this._selectIndex}></textarea>
          </div>
          <div className="markdown-show-wrap"
               dangerouslySetInnerHTML={{ __html: marked(this.state.markdownText) }}></div>
        </div>
      </div>
    )
  }
}

export default MarkDown;