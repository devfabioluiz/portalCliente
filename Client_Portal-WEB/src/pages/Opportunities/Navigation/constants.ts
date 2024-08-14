interface IPage {
  pathname: string;
  title: string;
}

const pages: IPage[] = [
  {
    pathname: '/opportunities',
    title: 'Opportunities',
  },
  {
    pathname: '/candidates',
    title: 'Candidates',
  },
  {
    pathname: '/consultants',
    title: 'Consultants',
  },
];

export { pages };
