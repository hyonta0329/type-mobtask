import * as React from 'react';
import component from './App';
import { Duplex } from 'stream';

type Props = {
    //20200516
    onSubmit: (payload: any) => void;
}

type State = {
    value: string;
}

class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state={
           value: '', 
        }
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const title = this.state.value.trim();
        //20200516
        //const title = 'dummy title';
        const TaskStatus = 'NS';
        const Due = '2020-05-16';
        //20200516
        const payload = {
            Comment: "Comment",
            Due: Due,
            title: title,
            TaskStatus: TaskStatus,
        }
        if (title === '') {
            return;
        }
        //20200516
        this.props.onSubmit(payload);
        this.setState({ value: '' });
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => { this.handleSubmit(e); } }>
                    <input
                        onChange={(e) => { this.handleChange(e); }}
                        value={this.state.value}
                    />
                    <button type={'submit'}>
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

export default Component;
