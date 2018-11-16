export function postUser(userData) {
  return new Promise(resolve => {
    if (!userData) {
      const response = {
        success: false
      };
    }
    const response = {
      success: true,
      user: userData
    };
    resolve(response);
  });
}

export function postUser2(userData) {
  return fetch('https://pie-requestbin.herokuapp.com/149ndv51', {
    method: "post",
    body: JSON.stringify(userData)
  })
}
