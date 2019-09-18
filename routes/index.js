module.exports = (app) => {
    
  app.use('/user', require('./user.route'));
  app.use('/admin', require('./admin.route'));
  app.use('/msg', require('./msg.route'));
  app.use('/products', require('./products.route'));
  app.use('/search', require('./search.route'));



}