import kraminskiy from './images/kraminskiy.jpg'
import kraminskiy_webp from './images/kraminskiy.webp'

import mezenecev from './images/mezentsev.png'
import mezenecev_webp from './images/mezentsev.webp'

import kalina from './images/anton-kalina.png'
import kalina_webp from './images/anton-kalina.webp'

import vlada from './images/vlada.jpg'
import vlada_webp from './images/vlada.webp'

import slava from './images/pro-muaythai.jpg'
import slava_webp from './images/pro-muaythai.webp'

import { v4 } from 'uuid'

export const aboutTeam = [
  {
    id: v4(),
    name: 'Андрей Мезенцев',
    description: '',
    image: mezenecev,
    webp: mezenecev_webp,
    role: 'Тренер',
    social: [
      {
        instagram: '',
        facebook: '',
      },
    ],
  },
  {
    id: v4(),
    name: 'Вечеслав Лозенко',
    image: slava,
    webp: slava_webp,
    description: '',
    role: 'Главный тренер',
    merit: [
      'Воспитал более 6 чемпионов Украины и Мира',
      'Более 10 лет опыта преподавания тайландского бокса',
      'Ежегодно тренирует и повышает квалификацию в клубах Тайланда',
      'Выступает с международными семинарами в Европе.',
    ],
    social: [
      {
        instagram: '',
        facebook: '',
      },
    ],
  },
  {
    id: v4(),
    name: 'Антон Калитвинцев',
    description: 'Тренер',
    image: kalina,
    webp: kalina_webp,
    role: 'Тренер',
    merit: [
      'Призёр всеукраинских турниров по Муай Тай и к1',
      'Чемпион и призёр международных турниров по Муай Тай и к1',
      'Самый быстрый нокаут 30 секунд.',
    ],
    social: [
      {
        instagram: '',
        facebook: '',
      },
    ],
  },
  {
    id: v4(),
    name: 'Евгений Краминский',
    description: 'Чемп',
    image: kraminskiy,
    webp: kraminskiy_webp,
    role: 'Тренер',
    merit: [
      'Мастер спорта по кикбоксингу',
      'Чемпион мира по К1 2016',
      'Призёр чемпионата мира по к1 2018',
      'Многократный чемпион Всеукратнских турниров по к1 и Муай Тай',
    ],
    social: [
      {
        instagram: '',
        facebook: '',
      },
    ],
  },
  {
    id: v4(),
    name: 'Влада Кухаренко',
    description: 'Чемп',
    image: vlada,
    webp: vlada_webp,
    role: 'Тренер',
    merit: [
      'Призёр всеукраинских турниров по Muay Thai и К1.',
      'Чемпионка и призёр международных турниров по Muay Thai и K1',
    ],
    social: [
      {
        instagram: '',
        facebook: '',
      },
    ],
  },
]
