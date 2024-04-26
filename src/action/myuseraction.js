export const MyUserRequest = () => ({
  type: 'MyUserRequest',
  
})

export const MyUserSuc = (payload) => ({
  type: 'MyUserSuc',
  payload
})

export const MyUserFail = (payload) => ({
  type: 'MyUserFail',
  payload
})

