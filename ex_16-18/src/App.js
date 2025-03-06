
import './App.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <EventHandlingDemo/>
      <RenderAndCommitDemo/>
      <SnapshotDemo/>
    </div>
  );
}

export default App;
