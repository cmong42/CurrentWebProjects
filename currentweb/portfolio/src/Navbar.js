import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function Navbar(){
    return (<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Christine Ong</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#page-1">About</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#page-2">Skills</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#page-3">Projects</a>
      </li>
      </ul>
      </div>
      </nav>
      </>
      )
      }