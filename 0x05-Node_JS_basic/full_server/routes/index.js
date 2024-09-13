import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binding the routes to the appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application.
 * @author Youssef Kayk <https://github.com/Yuss3f>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;