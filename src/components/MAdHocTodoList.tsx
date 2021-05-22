import * as React from 'react';
import { Table, Button} from 'react-bootstrap';
import TransitionOrDeleteContainerAdHoc from '../containers/TransitionOrDeleteContainerAdHoc'
import { BrowserRouter, Route, Link } from 'react-router-dom' 
import ShowDoneBox from '../containers/ShowDoneBox'
import EditTicketContainerAdHoc from '../containers/EditTicketContainerAdHoc';
import marked      from 'marked';
import highlightjs from 'highlight.js';

marked.setOptions({
    highlight: function(code, lang) {
      return highlightjs.highlightAuto(code, [lang]).value;
    },               // シンタックスハイライトに使用する関数の設定
    pedantic: false, // trueの場合はmarkdown.plに準拠する gfmを使用する場合はfalseで大丈夫
    gfm: true,       // GitHub Flavored Markdownを使用
    breaks: true,    // falseにすると改行入力は末尾の半角スペース2つになる
    sanitize: true,  // trueにすると特殊文字をエスケープする
    silent: false    // trueにするとパースに失敗してもExceptionを投げなくなる
  });

type Props = {
    todos: any,
}

function createElementFromHTML(html: any) {
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    return tempEl.firstElementChild;
}

const HTMLComponent = (props: string) => {
    return(
        <span dangerouslySetInnerHTML={{__html: props}}></span>
    );
}

function compare( a: any, b: any ){
    var r = 0;
     if( a.Due < b.Due ){ r = -1; }
     else if( a.Due > b.Due ){ r = 1; }
     return r;
     }

const component: React.SFC<Props> = (props: Props) => {
    const morningtodos = props.todos.todos.filter(function(a: any){
        return a.timezone === 'notapplicable'
      }).filter(function(a:any){
          return a.TaskStatus === 'NS'
      }).sort(compare);
      const currenttodos = morningtodos;
      const countmorningtodosNS = morningtodos.filter(function(a:any){
          return a.TaskStatus === 'NS';
      }).length;

    return (
    <div>
        <div>あと<b>{countmorningtodosNS} 件</b></div>
    <Table>
        <thead className="thead-dark"><tr><th>Title</th><th>Comment</th><th>Due/ Action</th></tr></thead>
        <tbody>
            {currenttodos.map((todo: any) => 
                <tr>
                    <td>
                    <EditTicketContainerAdHoc　TaskID={todo.TaskID} TaskStatus={todo.TaskStatus} title={todo.title} Comment={todo.Comment} Due={todo.Due} timezone={todo.timezone} />
                    </td>
                    <td>
                        {HTMLComponent(marked(todo.Comment))}
                    </td>
                    <td><TransitionOrDeleteContainerAdHoc TaskID={todo.TaskID} TaskStatus={todo.TaskStatus} Due={todo.Due}/></td>
                </tr>)}
        </tbody>
    </Table>
    <Link to='/done'>⇨ already finished tasks</Link>
    <Route path='/done' component={ShowDoneBox} />

    </div>
    );
};

export default component;
