/* eslint-dissable */
// warning 메시지 제거


import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let post = '강남 우동 맛집'
  let [글제목, b] = useState(['여자 코트 추천', '남자 코트 추천', '인기상품'])
  let [따봉, 따봉변경] = useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

    

    
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : 'red'}}>블로그임</h4>
      </div>

      <button onClick={()=>{
        let copy1 = [...글제목];
        copy1.sort();
        b(copy1)
        
       
      }}>이것두</button>
    
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '나한테 맞는 코트 추천'
          b(copy)
          }}>눌러봐</button>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=> {
          setModal(!modal)
          }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            //key = 콘솔창 에러 제거
            <div className='list' key={i} onClick={()=>{
            setModal(!modal); setTitle(i)}}>
            <h4>{a} <span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy);
              }}>👍</span> {따봉[i]}
              </h4>
            <p>2월 17일 발행</p>
            <button onClick={(e)=>{
              e.stopPropagation();
              let copy = [...글제목]
              copy.splice(i, 1)
              b(copy)
            }}>없다</button>
          </div>
          )
        })
      }


     
      <input onChange={(e)=>{입력값변경(e.target.value);
      }}></input>

    
      <button onClick={()=>{
        if (입력값 === '') {
          alert('no')
          return false
        }
        let copy = [...글제목];
        copy.unshift(입력값)
        b(copy)
      }}>push</button>
     
      {
        modal == true ? <Modal title={title}   color={'skyblue'} 글제목={글제목}/> : null
      }

        <Modal2></Modal2>
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>눌러</button>
   </div>
  )
}


class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return (
      <div>안뇽{this.state.age}
        <button onClick={()=>{
          this.setState({age:21})
        }}>눌렁</button>
      </div>
    )
  }
}


export default App;
