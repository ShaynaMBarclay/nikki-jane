import './App.css'

const DESTINATION = 'https://thenikkijane.com/'

export default function App() {
  const enter = () => {
    window.location.href = DESTINATION
  }

  return (
    <div className="gate">
      <div className="panel">
        <div className="panel-hdr">
          <div className="panel-hdr-dots"><span /><span /><span /></div>
          <span className="panel-hdr-title">✿ welcome</span>
        </div>

        <div className="gate-body">
          <div className="gate-butterfly" aria-hidden="true">
            <span className="gate-butterfly__wings">🦋</span>
          </div>
          <h1 className="gate-name">Miss Nikki Jane</h1>

          <button type="button" className="gate-btn" onClick={enter}>
            ✿ enter my world ✿
          </button>
        </div>
      </div>
    </div>
  )
}