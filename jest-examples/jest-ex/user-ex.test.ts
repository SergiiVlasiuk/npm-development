import * as user from './user-ex'

describe('testing getUserName', () => {
  it('4th user is "Mark"', () => {
    expect.assertions(1)
    return user.getUserName(4).then((data) => expect(data).toBe('Mark'))
  })
  it('5th user is "Paul"', () => {
    expect.assertions(1)
    return user.getUserName(5).then((data) => expect(data).toBe('Paul'))
  })
  it('0th user is unavailable', () => {
    let userID: number = 0
    expect.assertions(1)
    return user
      .getUserName(userID)
      .catch((data) =>
        expect(data).toEqual({ error: `User with ${userID} not found.` })
      )
  })
})
