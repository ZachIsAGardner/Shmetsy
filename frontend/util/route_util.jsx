const Auth = ({component, path, loggedIn}) => {
  const Component = component;

  return (
  <Route path={path} render={(props) => (
      (!loggedIn) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  );
};

const mapStateToProps = (state) => {
  return ({loggedIn: Boolean(state.session.currentUser)})
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
