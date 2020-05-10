import React from 'react'
import { v4 } from 'uuid'
import KalinaImg from '../AboutTeam/graphql/KalinaImg'
import SlavaImg from '../AboutTeam/graphql/SlavaImg'
import KraminskiyImg from '../AboutTeam/graphql/Kraminskiy'
import MezencevImg from '../AboutTeam/graphql/MezencevImg'
import VladaImg from '../AboutTeam/graphql/VladaImg'

export const spiritItem = [
  {
    id: v4(),
    forWhom: 'Детские тренировки',
    title: ['Детская группа'],
    when: {
      title: 'Когда?',
      start: '16',
      starPart: '30',
      end: '18',
      endPart: '00',
    },
    description: 'Понедельник, среда, пятница',
    cost: {
      title: 'Сколько?',
      value: '400',
      currency: 'грн/мес',
      count: ' 12 занятий',
    },
    coach: {
      title: 'Тренера',
    },
    acceptet: 'Допустимый возраст: на тренировки можно приходить с 6 лет.',
    data: [
      {
        id: v4(),
        name: 'Евгений Краминский',
        image: (
          <KraminskiyImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Евгений Краминский"
            alt="Евгений Краминский"
          />
        ),
      },
      {
        id: v4(),
        name: 'Андрей Мезенцев',
        image: (
          <MezencevImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Андрей Мезенцев"
            alt="Андрей Мезенцев"
          />
        ),
      },
      {
        id: v4(),
        name: 'Влада Кухаренко',
        image: (
          <VladaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Влада Кухаренко"
            alt="Влада Кухаренко"
          />
        ),
      },
    ],
  },
  {
    id: v4(),
    forWhom: `Тренировки для взрослых`,
    title: ['Взрослая группа(новички)'],
    when: {
      title: 'Когда?',
      start: '20',
      starPart: '00',
      end: '21',
      endPart: '30',
    },
    description: 'Вторник, четверг, суббота',
    cost: {
      title: 'Сколько?',
      value: '600',
      currency: 'грн/мес',
      count: ' 12 занятий',
    },
    coach: {
      title: 'Тренера',
    },
    acceptet:
      'от 16 лет без опыта или минимальным в боевых искусствах проходят',
    data: [
      {
        id: v4(),
        name: 'Антон Калитвинцев',
        image: (
          <KalinaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Антон Калитвинцев"
            alt="Антон Калитвинцев"
          />
        ),
      },
    ],
  },
  {
    id: v4(),
    title: ['Взрослая группа'],
    forWhom: `Тренировки для взрослых`,
    when: {
      title: 'Когда?',
      start: '20',
      starPart: '00',
      end: '22',
      endPart: '00',
    },
    description: 'Понедельник, вторник, среда',
    cost: {
      title: 'Сколько?',
      value: '600',
      currency: 'грн/мес',
      count: ' 12 занятий',
    },
    coach: {
      title: 'Тренера',
    },
    acceptet:
      'В данной группе вы сможете повысить физическую форму, ' +
      'отточить технику и приобрести опыт спаррингов.',
    data: [
      {
        id: v4(),
        name: 'Вечеслав Лозенко',
        image: (
          <SlavaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Вечеслав Лозенко"
            alt="Вечеслав Лозенко"
          />
        ),
      },
    ],
  },
  {
    id: v4(),
    title: ['Спортсмены'],
    forWhom: 'Тренировки в спортгруппе',
    when: {
      title: 'Когда?',
      start: '18',
      starPart: '00',
      end: '20',
      endPart: '00',
    },
    description: 'c Понедельник по Пятницу',
    cost: {
      title: 'Сколько?',
      value: '1200',
      currency: 'грн/мес',
      count: ' 12 занятий',
    },
    coach: {
      title: 'Тренера',
    },
    acceptet:
      'В спортгруппу можно попасть исключительно по предварительному отбору..',
    data: [
      {
        id: v4(),
        name: 'Вечеслав Лозенко',
        image: (
          <SlavaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Вечеслав Лозенко"
            alt="Вечеслав Лозенко"
          />
        ),
      },
    ],
  },
  {
    id: v4(),
    title: ['Индивидуальные тренировки'],
    forWhom: 'Индивидуальные тренировки',
    when: {
      title: 'Когда?',
      start: '00',
      starPart: '00',
      end: '00',
      endPart: '00',
    },
    description: 'c Понедельник по Пятницу',
    cost: {
      title: 'Сколько?',
      value: '',
      currency: '',
      count: '',
    },
    coach: {
      title: 'Тренера',
    },
    acceptet: '',
    data: [
      {
        id: v4(),
        name: 'Вечеслав Лозенко',
        image: (
          <SlavaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Вечеслав Лозенко"
            alt="Вечеслав Лозенко"
          />
        ),
      },
      {
        id: v4(),
        name: 'Антон Калитвинцев',
        image: (
          <KalinaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Антон Калитвинцев"
            alt="Антон Калитвинцев"
          />
        ),
      },
      {
        id: v4(),
        name: 'Евгений Краминский',
        image: (
          <KraminskiyImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Евгений Краминский"
            alt="Евгений Краминский"
          />
        ),
      },
      {
        id: v4(),
        name: 'Андрей Мезенцев',
        image: (
          <MezencevImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Андрей Мезенцев"
            alt="Андрей Мезенцев"
          />
        ),
      },
      {
        id: v4(),
        name: 'Влада Кухаренко',
        image: (
          <VladaImg
            className="z-depth-1 avatar__image--mini rounded-circle"
            title="Влада Кухаренко"
            alt="Влада Кухаренко"
          />
        ),
      },
    ],
  },
]
