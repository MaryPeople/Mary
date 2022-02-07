# 진행사항

## Project Init
기본 프로젝트 설정

```
npx react-native-cli init Mary
```

## Navigation Setting
RN 공식문서에도 multi-page 앱에 대해서 navigation 사용 권장 <br>
이전에도 router 시도했던 건 웹도 고려하느라 생겼던 것 뿐이니 <br>
native에만 집중하는 현재 상황에서는 navigation 사용이 적합하다고 판단

```
npm i react-navigation @react-native-community/masked-view react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens
npm install @react-navigation/stack
```

참고 링크

[RN documents](https://reactnative.dev/docs/navigation)

[Navigation documents](https://reactnavigation.org/docs/navigating/)

[멀티 페이지 구현 예시](https://daesiker.tistory.com/39)


[Dependency 관련 ](https://stackoverflow.com/questions/47737609/unable-to-resolve-module-react-navigation)

추가로 또 모듈 관련 문제 발생했어서 관련 해결 링크

[모듈 관련 1](https://velog.io/@dudrbs1040/ReactNative-%EC%98%A4%EB%A5%98)
[모듈 관련 2](https://github.com/software-mansion/react-native-gesture-handler/issues/1831)

<br>


###  유의사항 
ios환경에서 추가로 Cocopods 설치해야 함

```
npx pod-install ios
```


### 애매한 지점
현재 위에 타이틀이 남는 방식으로 다음 페이지로 넘어가져서
애초에 페이지들 자체는 라우팅으로 하고 그 안에서 네비게이션으로 넘어가는게 맞는건가..? 싶음
아니면 다른 navigation 안에서 또 처리할 수 있는건지