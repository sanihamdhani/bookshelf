const { addBuku, getAllBuku, getBukuById, getUpdateBuku, deleteBuku} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBuku,
  },
   {
    method: 'GET',
    path: '/books',
    handler: getAllBuku,
 },
 {
    method: 'GET',
    path: '/books/{id}',
    handler: getBukuById,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: getUpdateBuku,
 },

 {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBuku,
 },


];
 



module.exports = routes;