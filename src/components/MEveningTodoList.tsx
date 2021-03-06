import * as React from 'react';
import { Table, Button} from 'react-bootstrap';
import TransitionOrDeleteContainer from '../containers/TransitionOrDeleteContainer'
import EditTicketContainer from '../containers/EditTicketContainer';


type Props = {
    todos: any,
}

function compare( a: any, b: any ){
    var r = 0;
     if( a.TaskStatus < b.TaskStatus ){ r = -1; }
     else if( a.TaskStatus > b.TaskStatus ){ r = 1; }
     return r;
     }

     function compareDue( a: any, b: any ){
        var r = 0;
         if( a.Due < b.Due ){ r = 1; }
         else if( a.Due > b.Due ){ r = -1; }
         return r;
         }

const component: React.SFC<Props> = (props: Props) => {
    const morningtodos = props.todos.todos.filter(function(a: any){
        return a.timezone === 'night'
      }).sort(compareDue);
      const countmorningtodos = morningtodos.length;
      const countmorningtodosNS = morningtodos.filter(function(a:any){
          return a.TaskStatus === 'NS';
      }).length;
    return (
    <div>
        <div>あと<b>{countmorningtodosNS} 件</b> / {countmorningtodos}件中</div>
    <Table>
        <thead className="thead-dark"><tr><th>Title</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
        {morningtodos.map((todo: any) => 
                <tr>
                    <td id={"text"+todo.TaskStatus}>
                    <EditTicketContainer　TaskID={todo.TaskID} TaskStatus={todo.TaskStatus} title={todo.title} Comment={todo.Comment} Due={todo.Due} timezone={todo.timezone} />
                    </td>
                    <td id={todo.TaskStatus}>{todo.TaskStatus}</td>
                    <td id={"text"+todo.TaskStatus}><TransitionOrDeleteContainer TaskID={todo.TaskID} TaskStatus={todo.TaskStatus} /></td>
                </tr>)}
        </tbody>
    </Table>
    </div>
    
    
    //{morningtodos.map((todo: any) => <li>{todo.Comment}--{todo.title}--{todo.TaskStatus}--{todo.Due}</li>)}
    );
};

export default component;
