import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse } from 'bootstrap';

function Listings(props) {
  return (
    <>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    {props.header}
    <br></br>
    <img class="image" src = {props.image}/>
    </div>
    <div class="flip-card-back">
    {props.langList.map(l => <p class="content">{l}</p>)}
    </div>
    </div>
    </div>
    </>
  );
}

export default Listings;