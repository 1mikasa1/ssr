import React from 'react'

class Home extends React.Component {
  render(){
    return (
      <>
        <div>home</div>
        <button onClick={() => {
          console.log('接收到了', this.props)
          this.props.history.push('/school')
        }}>点我</button>
      </>
    )
  }
}

export default Home