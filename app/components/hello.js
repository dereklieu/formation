import React from 'react'

const lastChar = str => str[str.length - 1]

export class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      partial: '',
      isDeleting: false
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.greeting !== prevProps.greeting) {
      this.updatePartial(1500)
    }
  }

  updatePartial = (delay) => {
    if (isNaN(delay)) {
      delay = this.state.isDeleting
        ? 50
        : 10 + Math.round(Math.random() * 200)
    }
    setTimeout(this.sync, delay)
  }

  sync = () => {
    const { greeting } = this.props
    this.setState(state => {
      let isDeleting = state.isDeleting
      const add = isDeleting ? -1 : 1
      let partial = greeting.slice(0, state.partial.length + add)

      // '<whatever>' counts as one step
      if (lastChar(partial) === '<' && !isDeleting) {
        partial = greeting.slice(
          0,
          greeting.indexOf('>') + 1
        )
      } else if (lastChar(state.partial) === '>' && isDeleting) {
        partial = greeting.slice(
          0,
          greeting.indexOf('<')
        )
      }

      if (isDeleting && partial === '') isDeleting = false
      else if (!isDeleting && partial === greeting) isDeleting = true

      return { partial, isDeleting }
    }, () => {
      if (this.state.partial === '') {
        this.props.updateGreeting()
      } else if (this.state.partial === greeting) {
        // Linger on the whole word for a bit
        this.updatePartial(1500)
      } else {
        this.updatePartial()
      }
    })
  }

  renderNavWord (display, key) {
    return <span key={key} className='bg-dark nav-item'>{display}</span>
  }

  render() {
    const { partial } = this.state
    return (
      <div className='nav-row'>
        {this.renderNavWord('Hello,')}
        {partial ? partial.split(' ').map(this.renderNavWord) : null}
        <Cursor />
      </div>

    )
  }
}

function Cursor () {
  return (
    <div className='bg-dark input-cursor blink'>{' '}</div>
  )
}
