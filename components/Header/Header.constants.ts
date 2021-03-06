import { Search, OnlineIR, Megaphone, Check, Edit, ServiceIntroduce } from 'commonUi/Icons';

export const NAVIGATIONS = [
  {
    title: '파인더',
    href: 'https://www.nextunicorn.kr/finder',
    Icon: Search,
  },
  {
    title: '유니콘LIVE',
    href: 'https://www.nextunicorn.kr/unicornlive',
    Icon: OnlineIR,
  },
  {
    title: '지원프로그램',
    href: 'https://www.nextunicorn.kr/program',
    Icon: Check,
  },
  {
    title: '뉴스룸',
    href: 'https://www.nextunicorn.kr/finder',
    Icon: Megaphone,
  },
  {
    title: '유니콘CLASS',
    href: 'https://www.unicornclass.kr/',
    Icon: Edit,
  },
];

export const ALLIANCE_AND_EVENT = {
  title: '제휴/이벤트',
  href: 'https://www.nextunicorn.kr/events',
};

export const INTRODUCE_OF_SERVICES = {
  title: '서비스 안내',
  Icon: ServiceIntroduce,
  routes: [
    {
      title: '스타트업 서비스',
      href: 'https://www.nextunicorn.kr/service/startup',
    },
    {
      title: '전문투자자 서비스',
      href: 'https://www.nextunicorn.kr/service/investor',
    },
    {
      title: '유니콘LIVE 서비스',
      href: 'https://www.nextunicorn.kr/service/unicornlive',
    },
    {
      title: '이용 요금 및 결제',
      href: 'https://www.nextunicorn.kr/ticket',
    },
    {
      title: "nu's letter",
      href: 'https://www.nextunicorn.kr/nus-letter',
    },
  ],
};

export const LOGIN = {
  title: '로그인',
  href: 'https://www.nextunicorn.kr/login',
};

export const SIGNUP = {
  title: '회원가입',
  href: 'https://www.nextunicorn.kr/signup/select-account',
};

// 수정 대상
export const RIGHT_NAVIGATIONS = [
  {
    title: '제휴/이벤트',
    href: 'https://www.nextunicorn.kr/events',
  },
  {
    title: '서비스 안내',
    routes: [
      {
        title: '스타트업 서비스',
        href: 'https://www.nextunicorn.kr/service/startup',
      },
      {
        title: '전문투자자 서비스',
        href: 'https://www.nextunicorn.kr/service/investor',
      },
      {
        title: '유니콘LIVE 서비스',
        href: 'https://www.nextunicorn.kr/service/unicornlive',
      },
      {
        title: '이용 요금 및 결제',
        href: 'https://www.nextunicorn.kr/ticket',
      },
      {
        title: "nu's letter",
        href: 'https://www.nextunicorn.kr/nus-letter',
      },
    ],
  },
  {
    title: '로그인',
    href: 'https://www.nextunicorn.kr/login',
  },
  {
    title: '회원가입',
    href: 'https://www.nextunicorn.kr/signup/select-account',
  },
];
