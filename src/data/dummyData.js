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

// 브랜드 리스트
export const brandsList = [
  {
    id: 1,
    name: 'TechNova',
    country: 'Germany',
    established: 'Since 2015',
    stores: 1200,
    products: 15320,
    status: 'Active'
  },
  {
    id: 2,
    name: 'DecoLux',
    country: 'France',
    established: 'Since 2000',
    stores: 450,
    products: 6800,
    status: 'Pending'
  },
  {
    id: 3,
    name: 'InnoTech',
    country: 'Japan',
    established: 'Since 2012',
    stores: 850,
    products: 12500,
    status: 'Active'
  },
  {
    id: 4,
    name: 'WellCare',
    country: 'UK',
    established: 'Since 2008',
    stores: 300,
    products: 4500,
    status: 'Active'
  },
  {
    id: 5,
    name: 'AutoDrive',
    country: 'USA',
    established: 'Since 1999',
    stores: 600,
    products: 8900,
    status: 'Inactive'
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
    path: '/',
    isActive: false
  },
  {
    id: 3,
    title: 'Users',
    path: '/',
    isActive: false
  },
  {
    id: 4,
    title: 'Payment',
    path: '/',
    isActive: false
  },
  {
    id: 5,
    title: 'Analytics',
    path: '/',
    isActive: false
  },
  {
    id: 6,
    title: 'Permissions',
    path: '/',
    isActive: false
  },
  {
    id: 7,
    title: 'Inquiries',
    path: '/',
    isActive: false
  },
] 