import PeopleIcon from '@mui/icons-material/People';
const management = {
  id: 'group-management',
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'users',
      title: 'author',
      type: 'item',
      url: '/users',
      icon: PeopleIcon,
      breadcrumbs: true
    },
  ]
};

export default management;
