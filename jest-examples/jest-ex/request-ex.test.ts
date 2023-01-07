import request from './request-ex'

describe('testing promice with jest', () => {
  test('url "/users/4" should return "{ name: "Mark" }"', () => {
    expect.assertions(1)
    return request('/users/4').then((data) =>
      expect(data).toEqual({ name: 'Mark' })
    )
  })
})
