import React from 'react'
import ReactDOM from 'react-dom'

const App = props => (
  <div>
    {
      props.events.map(function(event){
        return(
          <div className="event">{event.title}</div>
        );
      })
    }
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('events_data')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <App events={data}/>,
    document.body.appendChild(document.createElement('div')),
  )
});
