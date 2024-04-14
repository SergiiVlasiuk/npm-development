let employees = [
  { id: '1', name: "Edmon D'antes", status: 'worker' },
  { id: '2', name: 'Alluri Sitarama Raju', status: 'hero' },
  { id: '3', name: 'Roman Shukhevych', status: 'hero' },
  { id: '4', name: 'Ptn Pnh', status: 'huylo' },
]

export const getAll = (req, res) => {
  console.log('getAll:', employees)
  res.status(200).json(employees)
  console.log('getAll:', employees)
}

export const create = (req, res) => {
  const newEmployee = {
    id: Date.now().toString(),
    ...req.body,
  }
  employees.push(newEmployee)
  console.log(employees)
  res.status(201).json(newEmployee)
}

export const remove = (req, res) => {
  let message = 'Employee has been dismissed.'
  employees = employees.filter((e) => {
    if (e.id === req.params.id && e.status === 'hero') {
      message = 'You must respect heroes!'
      return true
    }
    return e.id !== req.params.id
  })
  res.json({ message })
  console.log(employees)
}
