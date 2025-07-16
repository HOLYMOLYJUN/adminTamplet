// 대시보드 카드 데이터
export const dashboardCards = [
  {
    id: 1,
    title: '월간 매출',
    value: '20,000,000원',
    change: '+2.3%',
    isPositive: true,
    subtitle: 'Since last month',
    color: 'danger'
  },
  {
    id: 2,
    title: '당일 매출',
    value: '1,530,000원',
    change: '+24.5%',
    isPositive: true,
    subtitle: 'Since last month',
    color: 'success'
  },
  {
    id: 3,
    title: '월간 방문자',
    value: '45.3k',
    change: '+3.2%',
    isPositive: true,
    subtitle: 'Since last month',
    color: 'warning'
  },
  {
    id: 4,
    title: '당일 방문자',
    value: '45.3k',
    change: '+5.7%',
    isPositive: true,
    subtitle: 'Since last month',
    color: 'info'
  }
]

// 주문 통계 도넛 차트 데이터
export const orderStatistics = {
  series: [965, 102, 75, 96],
  labels: ['스탠다드', '비즈니스', '프리미엄', '만료된PC'],
  colors: ['#5b69bc', '#ff8acc', '#10C469', '#999']
}

// 연도별 매출 통계 막대 차트 데이터
export const monthlyStatistics = {
  series: [{
    name: '총 매출',
    data: [
      21123400, 
      25345600, 
      32789100,
      28456700,
      39123400, 
      37234500 
    ]
  }],
  categories: [ 7, 8, 9, 10, 11, 12],
  colors: ['#3a9be6']
}

// 월별 수익/지출 선형 차트 데이터
export const monthlyVisitorData = {
  series: [
    {
      name: '방문자 수',
      data: [
        120345,
        153210,
        201234,
        178900,
        256789,
        231234 
      ]
    },
    {
      name: '회원가입 수',
      data: [
        13450, 
        18900, 
        24500, 
        21000, 
        31200, 
        28900  
      ]
    }
  ],
  categories: [7, 8, 9, 10, 11, 12],
  colors: ['#28a745', '#007bff']
}

// 사용자 피드백 리스트
export const userFeedbacks = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Project Manager',
    feedback: '80+ Feedbacks',
    avatar: '/api/placeholder/40/40',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'UI/UX Designer',
    feedback: '90+ Feedbacks',
    avatar: '/api/placeholder/40/40',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'Software Engineer',
    feedback: '100+ Feedbacks',
    avatar: '/api/placeholder/40/40',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Mark Wilson',
    role: 'Marketing Specialist',
    feedback: '70+ Feedbacks',
    avatar: '/api/placeholder/40/40',
    rating: 4.6
  },
  {
    id: 5,
    name: 'Sara Johnson',
    role: 'Data Analyst',
    feedback: '50+ Feedbacks',
    avatar: '/api/placeholder/40/40',
    rating: 4.5
  }
]

// 사용자 리스트
export const usersList = [
  {
    id: 1,
    username: 'kimminsu',
    provider: '구글',
    email: 'minsu.kim@gmail.com',
    ip: '192.168.1.10',
    joinedAt: '2024-04-01'
  },
  {
    id: 2,
    username: 'parkjiyoon',
    provider: '네이버',
    email: 'jiyoon.park@naver.com',
    ip: '172.16.0.22',
    joinedAt: '2024-04-03'
  },
  {
    id: 3,
    username: 'leeseojin',
    provider: '카카오',
    email: 'seojin.lee@kakao.com',
    ip: '10.0.0.5',
    joinedAt: '2024-04-05'
  },
  {
    id: 4,
    username: 'choiyuna',
    provider: '구글',
    email: 'yuna.choi@gmail.com',
    ip: '192.168.1.55',
    joinedAt: '2024-04-07'
  },
  {
    id: 5,
    username: 'jangdonghyuk',
    provider: '네이버',
    email: 'donghyuk.jang@naver.com',
    ip: '172.16.0.33',
    joinedAt: '2024-04-10'
  }
]

// 인기 상품 리스트
export const topProducts = [
  {
    id: 1,
    name: 'Modern Desk Lamp',
    price: '$45.99',
    quantity: 120,
    amount: '$5,518.80',
    date: '15 April 2024'
  },
  {
    id: 2,
    name: 'Vintage Wooden Chair',
    price: '$99.00',
    quantity: 80,
    amount: '$7,920.00',
    date: '10 April 2024'
  },
  {
    id: 3,
    name: 'Wireless Keyboard',
    price: '$29.99',
    quantity: 150,
    amount: '$4,498.50',
    date: '08 April 2024'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: '$65.00',
    quantity: 90,
    amount: '$5,850.00',
    date: '05 April 2024'
  },
  {
    id: 5,
    name: 'Classic Table Lamp',
    price: '$42.50',
    quantity: 110,
    amount: '$4,675.00',
    date: '29 March 2024'
  }
]


// 네비게이션 메뉴 데이터
export const navigationMenu = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    isActive: true
  },
  {
    id: 2,
    title: 'VM',
    path: '/vm',
    isActive: false,
    subMenu: [
      { subMenuId: 1, title: 'PC 관리', path: '/vm/pc' },
      { subMenuId: 2, title: '서버리스트', path: '/vm/serverList' },
      { subMenuId: 3, title: '서비스 접속내역', path: '/vm/serviveHistory' },
    ]
  },
  {
    id: 3,
    title: 'Users',
    path: '/users',
    isActive: false,
    subMenu: [
      { subMenuId: 1, title: '활성화 PC', path: '/users/activePC' },
      { subMenuId: 2, title: '만료된 PC', path: '/users/expiredPC' },
    ]
  },
  {
    id: 4,
    title: 'Sales',
    path: '/sales',
    isActive: false
  },
  {
    id: 5,
    title: 'Payment',
    path: '/payment',
    isActive: false
  },
  {
    id: 6,
    title: 'Analytics',
    path: '/analytics',
    isActive: false
  },
  {
    id: 7,
    title: 'VisitorLog',
    path: '/visitor-log',
    isActive: false,
    subMenu: [
      { subMenuId: 1, title: 'IP 할당로그', path: '/visitor-log/ip' },
      { subMenuId: 2, title: '접속 로그', path: '/visitor-log/access' },
      { subMenuId: 3, title: '리부팅 로그', path: '/visitor-log/reboot' },
      { subMenuId: 4, title: '리셋 로그', path: '/visitor-log/reset' },
    ]
  },
  {
    id: 8,
    title: 'Permissions',
    path: '/permissions',
    isActive: false
  },
  {
    id: 9,
    title: 'Inquiries',
    path: '/inquiries',
    isActive: false
  },
] 

// 결제관리 리스트
export const paymentsList = [
  {
    id: 1,
    username: '김민수',
    method: '토스페이',
    amount: '₩120,000',
    paidAt: '2024-04-02'
  },
  {
    id: 2,
    username: '이민지',
    method: '계좌이체',
    amount: '₩55,000',
    paidAt: '2024-04-04'
  },
  {
    id: 3,
    username: '이서진',
    method: '카카오페이',
    amount: '₩33,000',
    paidAt: '2024-04-06'
  },
  {
    id: 4,
    username: '최유나',
    method: '카드',
    amount: '₩210,000',
    paidAt: '2024-04-08'
  },
  {
    id: 5,
    username: '장동국',
    method: '네이버페이',
    amount: '₩77,000',
    paidAt: '2024-04-11'
  },
  {
    id: 6,
    username: '박지윤',
    method: '네이버페이',
    amount: '₩120,000',
    paidAt: '2024-04-12'
  },
  {
    id: 7,
    username: '이민진',
    method: '네이버페이',
    amount: '₩10,000',
    paidAt: '2024-04-15'
  },
  
] 