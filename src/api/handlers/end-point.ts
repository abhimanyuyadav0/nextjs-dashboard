const apiEndPoint = {
   users: '/users',
   userById: (id: any) => `/users/${id}`,
   login: '/users/login',
};
export default apiEndPoint;
