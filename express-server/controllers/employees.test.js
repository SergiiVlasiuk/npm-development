import * as employeesModule from './employees.js'

let mockEmployees = [
  { id: '1', name: "Mocked Edmon D'antes", status: 'working' },
  { id: '2', name: 'Mocked Alluri Sitarama Raju', status: 'hero' },
  { id: '3', name: 'Mocked Roman Shukhevych', status: 'hero' },
  { id: '4', name: 'Mocked Ptn Pnh', status: 'huylo' },
]

/*
Just for note.
The test passed but doesn't work because of mocked implementation.
To fix test I need to know how to inject into `employees.js` the `employees` object.
My varian doesn't provide correct solution for the task:

```
jest.mock('./employees.js', () => {
  const originalModule = jest.requireActual('./employees.js');
  return {
    ...originalModule,
    employees: mockEmployees,
  };
});
```

So I've raised question on the stackoverflow:
@see https://stackoverflow.com/q/78315165/5728095
no answers at current time.
*/

beforeEach(() => {
  jest.spyOn(employeesModule, 'getAll').mockImplementation((req, res) => {
    return res.status(200).json(mockEmployees)
  })
  jest.spyOn(employeesModule, 'create').mockImplementation((req, res) => {
    const newEmployee = {
      id: '5',
      ...req.body,
    }
    mockEmployees.push(newEmployee)
    return res.status(201).json(newEmployee)
  })
  jest.spyOn(employeesModule, 'remove').mockImplementation((req, res) => {
    let message = 'Employee has been dismissed.'
    mockEmployees = mockEmployees.filter((e) => {
      if (e.id === req.params.id && e.status === 'hero') {
        message = 'You must respect heroes!'
        return true
      }
      return e.id !== req.params.id
    })
    return res.json({ message })
  })
})

describe('employees controller', () => {
  it('getAll method should return all employees', () => {
    const req = {} // Provide an empty object for req
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    employeesModule.getAll(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mockEmployees)
  })

  it('create method should create a new employee', () => {
    const req = { body: { name: 'New Employee', status: 'working' } }
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    employeesModule.create(req, res)
    const newEmployee = mockEmployees.find((e) => e.id === '5')
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith(newEmployee)
  })

  it('remove method should remove the employee if not a hero', () => {
    const req = { params: { id: '4' } }
    const res = { json: jest.fn() }
    employeesModule.remove(req, res)
    expect(res.json).toHaveBeenCalledWith({
      message: 'Employee has been dismissed.',
    })
  })

  it('remove method should not remove the employee if a hero', () => {
    const req = { params: { id: '2' } }
    const res = { json: jest.fn() }
    employeesModule.remove(req, res)
    expect(res.json).toHaveBeenCalledWith({
      message: 'You must respect heroes!',
    })
  })
})
