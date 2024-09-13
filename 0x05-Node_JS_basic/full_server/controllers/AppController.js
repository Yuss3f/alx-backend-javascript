/**
 * Containing the miscellaneous route handlers.
 * @author Youssef Kayk <https://github.com/Yuss3f>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;