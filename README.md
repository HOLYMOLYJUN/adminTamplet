# Admin Dashboard

React 19 + Vite 기반의 관리자 대시보드 템플릿

## 주요 기능

### 📊 대시보드 구성
- **카드 형태 통계 표시**: 총 주문 수, 수익, 신규 사용자, 고객 만족도
- **차트 구성**: 
  - 도넛 차트 (주문 통계)
  - 막대 차트 (연도별 통계)
  - 선형 차트 (월별 수익/지출)
- **사용자 피드백 리스트**
- **브랜드 및 제품 테이블**

### 🎨 디자인 특징
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 지원
- **접힐 수 있는 사이드바**: 
  - 펼침 상태: 245px
  - 접힘 상태: 80px
- **CSS 변수 기반 테마**: :root 변수로 색상, 여백, 그림자 관리
- **부드러운 애니메이션**: 호버 효과 및 전환 효과

### 🔧 기술 스택
- **React 19**
- **Vite**
- **ApexCharts**
- **CSS**

## 프로젝트 구조

```
admin_t/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── dummyData.js
    ├── styles/
    │   ├── globals.css
    │   └── App.css
    └── components/
        ├── Sidebar.jsx
        ├── Sidebar.css
        ├── Header.jsx
        ├── Header.css
        ├── Dashboard.jsx
        ├── Dashboard.css
        ├── DashboardCard.jsx
        ├── DashboardCard.css
        ├── Chart.jsx
        ├── Chart.css
        ├── Table.jsx
        ├── Table.css
```

## 컴포넌트 설명

### 레이아웃 컴포넌트
- **Sidebar**: 접힐 수 있는 네비게이션 사이드바
- **Header**: 검색, 알림, 사용자 메뉴가 포함된 헤더
- **Dashboard**: 메인 대시보드 레이아웃

### 데이터 시각화 컴포넌트
- **DashboardCard**: 통계 카드 컴포넌트
- **DonutChart**: 도넛 차트 (ApexCharts)
- **BarChart**: 막대 차트 (ApexCharts)
- **LineChart**: 선형 차트 (ApexCharts)

### 테이블 컴포넌트
- **UserFeedbackList**: 사용자 피드백 리스트
- **BrandsTable**: 브랜드 관리 테이블
- **ProductsTable**: 제품 관리 테이블

## 반응형 브레이크포인트

```css
/* 태블릿 */
@media (max-width: 768px) { ... }

/* 모바일 */
@media (max-width: 480px) { ... }
```

## 데이터 구조

모든 데이터는 `src/data/dummyData.js`에서 관리되며, 실제 API 연결 시 해당 부분만 수정
