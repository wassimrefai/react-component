import {FullName} from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Address/>
    <ProfilePhoto/>
    </div>
  );
}

export default App;
