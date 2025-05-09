export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2019',
    title: 'Farmacia',
    description: 'Aprendí atención al cliente, rapidez y precisión.'
  },
  {
    year: '2021',
    title: 'Administrativa en Hospital',
    description: 'Gestión de datos, empatía y procesos médicos.'
  },
  {
    year: '2023',
    title: 'Formación en desarrollo web',
    description: 'HTML, CSS, JS, React y proyectos personales.'
  },
];

export default timelineData;
