export const createUser = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/user",
    data: { user }
  });
};

export const createSession = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
};

export const endSession = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};
