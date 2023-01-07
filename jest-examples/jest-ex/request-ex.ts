const users = {
  4: { name: 'Mark' } as User,
  5: { name: 'Paul' } as User
}

export class User {
  public name!: String

  public constructor(init?: Partial<User>) {
    Object.assign(this, init)
  }
}

export default function request(url: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const userID: number = parseInt(url.substr('/users/'.length, 10))
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: `User with ${userID} not found.`
          })
    )
  })
}
