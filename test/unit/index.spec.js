const net = require('net')
const { expect } = require('chai')

const port = require('../../')

describe('Arbitrary Unused Port', () => {
  it('should return an arbitrary port', () => {
    expect(port)
      .to.be.a('number')
  })

  it('should return an unused port', (done) => {
    net.createServer().listen(port, 'localhost', function () {
      this.close()
      done()
    })
  })

  it('should return a different port for each require', () => {
    expect(require('../../'))
      .to.be.a('number').and
      .to.not.equal(port)
  })
})
