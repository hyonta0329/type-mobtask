import AWS from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';
import React from 'react';
import $ from "jquery";
import axios from 'axios';
import {setTicket} from '../modules/todos/Load'
//jqueryの使い方は？
//import setTicket from '../modules/todos/Load'


const userPool = new CognitoUserPool({
  UserPoolId: 'us-east-2_J3czsOpsv',
  ClientId: '3atuib3usf88b9cd72qbs1jvod'
})
var authtoken = '';

function compare(a: any, b: any){
  var r = 0;
   if( a.Created > b.Created ){ r = -1; }
   else if( a.Created < b.Created ){ r = 1; }
   return r;
   }

   //function to get ticket from API GET
var tickets = [];
interface AjaxResponseInterface {
  width:number;
  height:number;
  etc:any;
}

/*export const Instance = axios.create({
  baseURL: "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye",
  headers: {
    'Authorization': authtoken, 
    },
  method: 'GET',
  responseType: 'json'
})*/

function getTickets(token: string, usr:string, targetstore: any) {
  dispLoading('データを更新しています')
  const Instance = axios.create({
    baseURL: "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+usr,
    headers: {
      'Authorization': token, 
      },
    method: 'GET',
    responseType: 'json'
  });
  Instance.get('')
  .then(function(response){
    console.log(response);
    return response;
  }).then(function(response){
    return setTicket(response.data.body.Items, token);
  }).then(function(response){
    targetstore.dispatch(response);
  }).then(function(){removeLoading();})
}

function postTicket(token: string, usr:string, title: string, Comment: string, Due: string, Priority: string, timezone: string, issuetype: any, targetstore:any) {
  dispLoading('チケットを作成しています');
  const createdtime = new Date();
  const Instance = axios.create({
    baseURL: "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+usr,
    headers: {
      'Authorization': token, 
      },
    method: 'POST',
    responseType: 'json',
  });
  console.log(token);
  console.log(usr);
  console.log(title);
  console.log(Comment);
  console.log(Due);
  console.log(Priority);
  console.log(timezone);
  console.log(issuetype);
  console.log(targetstore);
  Instance.post('', {
    'created' : 'created',
    'username' : usr,
    'title' : title,
    'Issuetype' : issuetype,
    'Status' : 'NS',
    'timezone' : timezone,
    'Due' : Due,
    'Comment' : Comment,
    'EstTime' : 'None',
    'Priority' : Priority,
  }
  )
  .then(function(response){
    console.log('putting ticket finished...');
    console.log(response);
    removeLoading();
  })
  .then(function(response){
    console.log('revoking getTickets as a result of putTicket...');
    getTickets(token, usr, targetstore);
  }).then(function(response){
  })
}

function TransitionOrDeleteTicket(TaskID: string, type: string, TaskStatus: string, token: string, usr: string, targetstore: any) {
  dispLoading(type);
  const transitInstance = axios.create({
    baseURL: "https://hmml9crysl.execute-api.us-east-2.amazonaws.com/prod/update-delete-mobtask",
    headers: {
      'Authorization': authtoken, 
      },
    method: 'POST',
    responseType: 'json',
  });
  transitInstance.post('', {
    'TaskID':TaskID,
    'OperationType': type,
    'TaskStatus':TaskStatus,
  }).then(function(response){
    console.log('adding change to ticket...');
    console.log(type);
    removeLoading();
  }).then(function(){
    getTickets(token, usr, targetstore);
  }).then(function(response){
    console.log('operation finished');
  })
}

function EditTicket(TaskID: string, type: string, Due: string, title: string, Comment: string, token: string, usr: string, targetstore: any){
  dispLoading(type);
  const EditInstance = axios.create({
    baseURL: "https://hmml9crysl.execute-api.us-east-2.amazonaws.com/prod/update-delete-mobtask",
    headers: {
      'Authorization': authtoken, 
      },
    method: 'POST',
    responseType: 'json', 
  });
  EditInstance.post('', {
    'TaskID': TaskID,
    'OperationType':type,
    'Due': Due,
    'title': title,
    'Comment': Comment,
  }).then(function(response){
    removeLoading();
  }).then(function(response){
    getTickets(token, usr, targetstore);
  })
}


//loading effect function
/* ------------------------------
 Loading イメージ表示関数
 引数： msg 画面に表示する文言
 ------------------------------ */
 function dispLoading(msg: string){
  // 引数なし（メッセージなし）を許容
  if( msg == undefined ){
    msg = "";
  }
  // 画面表示メッセージ
  var dispMsg = "<div class='loadingMsg'>" + msg + "</div>";
  // ローディング画像が表示されていない場合のみ出力
  if($("#loading").length == 0){
    $("body").append("<div id='loading'>" + dispMsg + "</div>");
  }
}

/* ------------------------------
Loading イメージ削除関数
------------------------------ */
function removeLoading(){
  $("#loading").remove();
}


/*function getTickets(token: string, usr:string, previousprocess: any):JQueryPromise<any>  {
  var url = "https://tcnsvn5d6b.execute-api.us-east-2.amazonaws.com/prod/goodbye?username="+usr;
  return $.ajax({
            contentType: "application/json",
            type: 'GET',
            url: url,
            processdata: false,
            dataType: 'json',
            async: false,
            headers: {
                'Authorization': token, 
                },
            success: function(data: any){               
              console.log(data['body']['Items'][0]['TaskID']);
              console.log(data['body']['Items'][1]['TaskID']);
              var filterresults = [];
              filterresults = data['body']['Items'].filter(function(a: any){
                return a.timezone === 'health'
              });
              filterresults.sort(compare);
              console.log(filterresults);
              console.log(Object.keys(filterresults).length);
              tickets = filterresults;
              if(filterresults.length === 0){
               //ここにticketsを登録するアクションを入れる
               console.log('new tickets got from API' + filterresults);
              }else{
                console.log('blank tickets');
                console.log(usr);
                console.log(token);
            }
              }
    })
    console.log(results);
    var returnedresults = results.responseJSON.body.Items.filter(function(a: any){
      return a.timezone === 'health'
    }).sort(compare)
    return(returnedresults);
}
*/

function PromiseProcess(data: any){
  return new Promise(function(callback){
    setTimeout(function(){
      callback(data);
    }, 100);
  });
}

export const logger = (store:any) => (next:any) => (action:any) => {
    console.log("before: %O", store.getState());
    next(action);
    console.log("after: %O", store.getState());
    if(action.type === 'SEND_LOGIN'){
      dispLoading('ログイン中...')
      const usr = store.getState().login.login[0].username;
      const pas = store.getState().login.login[0].password;
      const authenticationDetails = new AuthenticationDetails({
        Username : usr,
        Password : pas
      })
      const cognitoUser = new CognitoUser({
        Username : usr,
        Pool : userPool
      })
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (authresult) {
            var logintoken = authresult.getIdToken().getJwtToken();
            authtoken = logintoken;
            window.alert('ログインしました');
            PromiseProcess(authtoken).then(function(data){
              removeLoading();
            }).then(function(data){
              getTickets(logintoken, usr, store);
            })
            /*PromiseProcess(logintoken).then((data) => {
              console.log('this is...' + data);
              return (data)
            }).then((data) => {
              console.log('revoking setToken function...');
              return setToken(data);
            }).then((data) =>{
              console.log('revoking getTickets function...');
              return getTickets(logintoken, usr, data);
            }).then((data) => {
              console.log('revoking setTicket function...');
              return setTicket(data);
            }).then((data) => {
              return store.dispatch(data);
            }).then((data) => {
              console.log('End of function!');
              removeLoading();
            });*/
  
        }, onFailure: (err) => {
            window.alert('ログインに失敗しました');
            return(err);
            console.log(err);
            
            //removeLoading();
  
        }
      })
    }else if(action.type === 'PUT_TICKET'){
      const usr = store.getState().login.login[0].username;
      postTicket(authtoken, usr, action.payload.title, action.payload.Comment, action.payload.Due, action.payload.Priority, action.payload.timezone, action.payload.Issuetype, store)
    }else if(action.type === 'TRANSITION_OR_DELETE_TICKET'){
      const usr = store.getState().login.login[0].username;
      TransitionOrDeleteTicket(action.payload.TaskID, action.payload.OperationType, action.payload.TaskStatus, authtoken, usr, store);
    }else if(action.type === 'EDIT_TICKET'){
      const usr = store.getState().login.login[0].username;
      EditTicket(action.payload.TaskID, action.payload.OperationType, action.payload.Due, action.payload.title, action.payload.Comment, authtoken, usr, store)
    }
  }

  ///TaskID: string, type: string, Due: string, title: string, Comment: string, token: string, usr: string, targetstore: any