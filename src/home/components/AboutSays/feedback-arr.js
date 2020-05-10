import React from 'react'
import { v4 } from 'uuid'
import PalienkoImage from './graphql/PalienkoImage'
import MotImage from './graphql/MotImage'
import RubanImage from './graphql/RubanImage'
import KilinichImage from './graphql/KilinichImage'

export const feedbackArr = [
  {
    id: v4(),
    avatarTitle: 'Анастасия Палиенко',
    avatarDescription: 'Общая группа',
    image: (
      <PalienkoImage
        className="image"
        title="Анастасия Палиенко"
        alt="Анастасия Палиенко"
      />
    ),
    description: `
          Muay Thai Spirit Gym давно для меня стал вторым домом.
          Замечательные тренера, которые уделяют внимание каждому,
          рассказывают все тонкости и технику тайландского бокса.
          Большой зал, очень атмосферный, действительно передает
          атмосферу Тайланда. Сами занятия отлично приводят в форму,
          переживала за травматичность, но зря) все очень безопасно и
          тренера всегда контролируют процесс.
    `,
  },
  {
    id: v4(),
    avatarTitle: 'Денис Мот',
    avatarDescription: 'Общая группа',
    image: <MotImage className="image" title="Денис Мот" alt="Денис Мот" />,
    description: `
    Отличный зал, замечательные профессиональные тренера, 
    всегда подскажут и помогут, рекомендую для всех возрастов и уровней!
    `,
  },
  {
    id: v4(),
    avatarTitle: 'Татьяна Рубан',
    avatarDescription: 'Общая группа',
    image: (
      <RubanImage className="image" title="Татьяна Рубан" alt="Татьяна Рубан" />
    ),
    description: `
На мой взгляд, тут лучшие тренировки по таю в Киеве. Сильные группы, даже любительская, что редкость. 
Удобное время на 20:00. Дают хорошую технику. На большинстве тренировок есть работа на педах. 
Много работы коленями, клинча, локтей, чего тоже мало в других залах. 
Позитивная атмосфера. Для тех, кто задумывается выступать на соревнованиях - это идеальное место.
    `,
  },
  {
    id: v4(),
    avatarTitle: 'АРТЁМ КИЛИНИЧ',
    avatarDescription: 'Общая группа',
    image: (
      <KilinichImage
        className="image"
        title="АРТЁМ КИЛИНИЧ"
        alt="АРТЁМ КИЛИНИЧ"
      />
    ),
    description: `
Лучший зал таиландского бокса в Киеве! Главный тренер Лозенко Вячеслав регулярно летает в Таиланд, 
для повышения тренерской квалификации, это очень важно в этом виде спорта.
    `,
  },
]
