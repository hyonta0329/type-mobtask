import * as React from 'react';
import { Table, Button} from 'react-bootstrap';
import TransitionOrDeleteContainer from '../containers/TransitionOrDeleteContainer'

type Props = {
    todos: any,
}

const component: React.SFC<Props> = (props: Props) => {
    const morningtodos = props.todos.todos.filter(function(a: any){
        return a.timezone === 'morning'
      });
    return (
    <div>
    <Table>
        <thead className="thead-dark"><tr><th>Title</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
            {morningtodos.map((todo: any) => 
                <tr>
                    <td>{todo.title}</td>
                    <td>{todo.TaskStatus}</td>
                    <td><TransitionOrDeleteContainer TaskID={todo.TaskID} TaskStatus={todo.TaskStatus} /></td>
                </tr>)}
        </tbody>
    </Table>
    </div>
    
    
    //{morningtodos.map((todo: any) => <li>{todo.Comment}--{todo.title}--{todo.TaskStatus}--{todo.Due}</li>)}
    );
};

export default component;
