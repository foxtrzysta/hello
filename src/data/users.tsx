export interface users {
  name?: string;
  average?: string;
  attendance?: string;
  index: number;
}

const users: users[] = [
  {
    name: 'Adam Konarzewki',
    attendance: '38%',
    average: '2.4',
    index: 0,
  },
  {
    name: 'Iwona Małek',
    attendance: '45%',
    average: '3.3',
    index: 1,
  },
  {
    name: 'Robert Mandrysz',
    attendance: '47%',
    average: '6.7',
    index: 2,
  },
  {
    name: 'Król Julian',
    attendance: '10%',
    average: '2.8',
    index: 3,
  },
  {
    name: 'Konrad Ochotek',
    attendance: '15%',
    average: '5.7',
    index: 4,
  },
  {
    name: 'Iwona Ostrowska',
    attendance: '87%',
    average: '7.7',
    index: 5,
  },
  {
    name: 'Ada Calsberg',
    attendance: '56%',
    average: '6.8',
    index: 6,
  },
];

export default users;
