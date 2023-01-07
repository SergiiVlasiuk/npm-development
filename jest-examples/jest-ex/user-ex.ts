import request from './request-ex'

export function getUserName(userID) {
  return request(`/users/${userID}`).then((user) => user?.name)
}
