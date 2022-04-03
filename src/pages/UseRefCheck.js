import React, {useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'; 

// 부모 컴포넌트 렌더링 -> 자식 컴포넌트 렌더링
// 부모 Clean-UP 진행 -> 자식 useEffect 진행 -> 부모 useEffect 진행
const Child = () => {
  
  const [text, setText] = useState(() => {
    console.log("   Child useState");
    return "";
  });

  function handleChange(val) {
    setText(val);
  }

  return(
    <TextInput 
      style={{backgroundColor: 'red'}}
      onChangeText={handleChange}
      value={text}
      ref={textRef}
      autoFocus={true}
    />
  );
};

export default function UseRefCheck() {

  // 2. UseState Hook
  // 컴포넌트의 상태값을 관리하는 Hook으로 컴포넌트 마운트시에만 한번 동작
  // useState는 다른 기본 함수들과 동일하게 순차적으로 실행되는 것으로 보임
  // 하지만 해당 컴포넌트의 핵심 데이터인 상태를 관리하기 때문에 당연히 최상단에 배치
  const [show, setShow] = useState(() => {
    console.log("App useState");
    return false;
  });
  const [info, setInfo] = useState(false);


  function handleShowClick() {
    setShow(!show);
    console.log("App Event Handling - show********");
  }

  function handleInfoClick() {
    setInfo(!info);
    console.log("App Event Handling - info********");
  }

  console.log("App render end!");

  // show값 여부에 따라서 Child 컴포넌트를 그릴 수도 있고 아닐 수도 있음
  return (
    <View>
      <Button color={show ? 'red' : 'blue'} title="Search" onPress={handleShowClick}>Search</Button>
      <Button color={info ? 'red' : 'blue'} title="Info" onPress={handleInfoClick}>Info</Button>
      {show ? <Child /> : null}
    </View>
  );
}
