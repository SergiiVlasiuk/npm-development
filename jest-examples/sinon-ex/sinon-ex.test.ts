import { main } from './sinon-ex'
import sinon from 'sinon'
import { expect } from 'chai'

// https://stackoverflow.com/questions/59635513/mocking-the-current-time-in-sinon
describe('stack overflow 59635513', () => {
  afterEach(() => {
    sinon.restore()
  })
  it('stabbing date', () => {
    const mDate = 1000 * 1000
    const dateNowStub = sinon.stub(Date, 'now').returns(mDate)
    const actual = main()
    expect(actual).to.be.eq(mDate)
    sinon.assert.calledOnce(dateNowStub)
  })
})
