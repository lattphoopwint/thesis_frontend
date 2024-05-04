export default function isAuthenticated() {
  !!localStorage.getItem('token');
  const userRole = localStorage.getItem('token') ? JSON.parse(atob(localStorage.getItem('token').split('.')[1])).role : '';

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/teacher" render={() => (isAuthenticated && userRole === 'teacher') ? <TeacherDashboard /> : <Redirect to="/login" />} />
        <Route path="/student" render={() => (isAuthenticated && userRole === 'student') ? <StudentDashboard /> : <Redirect to="/login" />} />
        <Route path="/admin" render={() => (isAuthenticated && userRole === 'admin') ? <AdminDashboard /> : <Redirect to="/login" />} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};