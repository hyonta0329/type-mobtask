import * as React from 'react';
import { Table, Button} from 'react-bootstrap';
import TransitionOrDeleteContainer from '../containers/TransitionOrDeleteContainer'

type Props = {
    todos: any,
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
    return (
    <div>
    <Table>
        <thead className="thead-dark"><tr><th>Title</th><th>Comment</th><th>Due</th><th>Action</th></tr></thead>
        <tbody>
            {morningtodos.map((todo: any) => 
                <tr>
                    <td>{todo.title}</td>
                    <td>{todo.Comment}</td>
                    <td>{todo.Due}</td>
                    <td><TransitionOrDeleteContainer TaskID={todo.TaskID} TaskStatus={todo.TaskStatus} /></td>
                </tr>)}
        </tbody>
    </Table>
    </div>
    
    
    //{morningtodos.map((todo: any) => <li>{todo.Comment}--{todo.title}--{todo.TaskStatus}--{todo.Due}</li>)}
    );
};

export default component;
