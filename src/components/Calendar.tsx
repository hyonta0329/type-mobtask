import * as React from 'react';
import Calendar from 'react-calendar';
import App from '../App'
import 'react-calendar/dist/Calendar.css';
import { datepicker } from 'jquery';

type calendarvalue = any|null

type Props = {
    todos: any,
}

type State = {
    date: Date;
    month_item: any;
}

function compare( a: any, b: any ){
    var r = 0;
     if( a.Due < b.Due ){ r = -1; }
     else if( a.Due > b.Due ){ r = 1; }
     return r;
     }

function getDateWithString(dt: Date){
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth()+1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var result = y + "-" + m + "-" + d;
    return result;
}

     
class Component extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state={
            //基準日
            date: new Date(2021, 2, 2),
            //タイルデータ
        //テストデータ
            month_item: {
                "2021-02-25": {text: "work"},
            }
        }
    }
    //レンダリング
    render() {
        
        //todoリストのフィルタリング、日付リストの作成
        const adhoctodos = this.props.todos.todos.filter(function(a: any){
            return a.timezone === 'notapplicable'
          }).sort(compare);
        
        const datelist: string[] = []
        for(let i in adhoctodos){
            datelist.push(adhoctodos[i].Due)
          }

        //デバッグ
        //console.log(datelist)
        //console.log(getDateWithString(new Date))

        //const tileContent = (value:calendarvalue) => 
        //元関数：月次View、かつ日付が
        //value.view === 'month' &&  value.date.getDay() === 0 ?
        //更新後関数1：月次View、かつ日付がAdHocTasksの中に含まれていたらCountする
        const tileContent = (value:calendarvalue) =>
        value.view === 'month' &&  datelist.includes(getDateWithString(value.date)) ?
                <p>★</p> : null;
        

        //更新後関数2：月次View、かつ日付がAdHocTasksの中に含まれていたらCountする
        /*const tileContent = (value:calendarvalue) => {
            var by_date_todolist: string = ''
            for(let i in adhoctodos.length){
                if(value.view === 'month' &&  adhoctodos[i].Due === getDateWithString(value.date)){
                    by_date_todolist += adhoctodos[i].title
                    console.log('by_date_todolist')
                }
            }
        return <p>{by_date_todolist}</p>
        }
        */
        

            return (
                <div className = "container">
                <div className="wrapper">
                    <br />
                    <h3 className="form-signin-heading" >Calendar</h3>
                    <hr className="colorgraph" />
                    <Calendar
                        locale="ja-JP"
                        calendarType="US"
                        tileContent={tileContent}
                    />
                </div>
                </div>
            );
            }
    }

    //tileContent={this.state.month_days}
    export default Component