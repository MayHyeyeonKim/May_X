# Project Setup

## Technologies

| Technology       | Type      | Description                                                                 | Purpose                                                                                      | Key Features                                                                   |
|------------------|-----------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **React**        | Library   | A JavaScript library for building user interfaces.                          | Allows developers to create reusable UI components that handle the view layer of web applications. | Virtual DOM, component-based architecture, JSX syntax.                         |
| **Next.js**      | Framework | A React framework for building server-side rendered (SSR) and static web applications. | Provides features like server-side rendering, static site generation, and API routes, making it easy to build SEO-friendly and fast web applications. | Server-side rendering, static site generation, file-based routing, API routes, optimized performance, automatic code splitting. |
| **Redux**        | Library   | A state management library for JavaScript applications.                     | Provides a predictable state container for managing the state of applications, allowing for a more manageable and consistent state flow. | Single source of truth (store), actions, reducers, middleware, unidirectional data flow. |
| **Redux-Saga**   | Library   | A library that aims to handle application side effects (e.g., asynchronous actions) in Redux. | Uses generator functions to make asynchronous control flows easier to read, write, and test. | Generator functions, effects, watchers, sagas.                                 |
| **Redux Toolkit**| Toolset   | An official, opinionated, batteries-included toolset for efficient Redux development. | Provides a set of tools and best practices to simplify Redux usage, reduce boilerplate, and make the codebase more maintainable. | `configureStore`, `createSlice`, `createAsyncThunk`, `createReducer`, built-in middleware integration. |

| 기술              | 유형       | 설명                                                                                       | 목적                                                                                       | 주요 기능                                                                          |
|-------------------|------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **React**         | 라이브러리 | 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.                              | 웹 애플리케이션의 뷰 계층을 처리하는 재사용 가능한 UI 컴포넌트를 만들 수 있게 합니다.          | 가상 DOM, 컴포넌트 기반 아키텍처, JSX 문법.                                         |
| **Next.js**       | 프레임워크 | 서버 사이드 렌더링(SSR) 및 정적 웹 애플리케이션을 구축하기 위한 React 프레임워크입니다.       | 서버 사이드 렌더링, 정적 사이트 생성, API 라우트 등 SEO 친화적이고 빠른 웹 애플리케이션을 쉽게 구축할 수 있는 기능을 제공합니다. | 서버 사이드 렌더링, 정적 사이트 생성, 파일 기반 라우팅, API 라우트, 최적화된 성능, 자동 코드 분할. |
| **Redux**         | 라이브러리 | JavaScript 애플리케이션을 위한 상태 관리 라이브러리입니다.                                  | 애플리케이션의 상태를 관리하기 위한 예측 가능한 상태 컨테이너를 제공하여 더 관리 가능하고 일관된 상태 흐름을 가능하게 합니다. | 단일 소스(store), 액션, 리듀서, 미들웨어, 단방향 데이터 흐름.                           |
| **Redux-Saga**    | 라이브러리 | Redux에서 애플리케이션 부수 효과(예: 비동기 작업)를 처리하기 위한 라이브러리입니다.           | 제너레이터 함수를 사용하여 비동기 제어 흐름을 읽기 쉽고, 작성하기 쉽고, 테스트하기 쉽게 만듭니다. | 제너레이터 함수, 이펙트, 워처, 사가.                                                 |
| **Redux Toolkit** | 툴셋       | 효율적인 Redux 개발을 위한 공식적이고 의견이 반영된 배터리 포함형 툴셋입니다.                | Redux 사용을 간소화하고 보일러플레이트 코드를 줄이며 코드베이스를 더 유지보수 가능하게 만드는 도구와 모범 사례 세트를 제공합니다. | `configureStore`, `createSlice`, `createAsyncThunk`, `createReducer`, 내장 미들웨어 통합. |

<!-- ### React
**Description**: React is a JavaScript library for building user interfaces.  
**Purpose**: It allows developers to create reusable UI components that handle the view layer of web applications.  
**Key Features**: Virtual DOM, component-based architecture, JSX syntax.

### Next.js
**Description**: Next.js is a React framework for building server-side rendered (SSR) and static web applications.  
**Purpose**: It provides features like server-side rendering, static site generation, and API routes, making it easy to build SEO-friendly and fast web applications.  
**Key Features**: Server-side rendering, static site generation, file-based routing, API routes, optimized performance, and automatic code splitting.

### Redux
**Description**: Redux is a state management library for JavaScript applications.  
**Purpose**: It provides a predictable state container for managing the state of applications, allowing for a more manageable and consistent state flow.  
**Key Features**: Single source of truth (store), actions, reducers, middleware, and a unidirectional data flow.

### Redux-Saga
**Description**: Redux-Saga is a library that aims to handle application side effects (e.g., asynchronous actions) in Redux.  
**Purpose**: It uses generator functions to make asynchronous control flows easier to read, write, and test.  
**Key Features**: Generator functions, effects, watchers, and sagas.

### Redux Toolkit
**Description**: Redux Toolkit is an official, opinionated, batteries-included toolset for efficient Redux development.  
**Purpose**: It provides a set of tools and best practices to simplify Redux usage, reduce boilerplate, and make the codebase more maintainable.  
**Key Features**: `configureStore`, `createSlice`, `createAsyncThunk`, `createReducer`, and built-in middleware integration. -->

## Installation

### Node and NPM Version

```js
node - v //v22.1.0
npm - v //10.7.0
```

### Initialize the Project

```js
npm init
```

### Install Next.js

```js
npm i next //version matters
```
