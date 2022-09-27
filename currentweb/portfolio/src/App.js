import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Listings from './Listings';
import Navbar from './Navbar';
import $ from "jquery"
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import { Component } from 'react';
import Example from './Example';
import { v4 as uuidv4 } from "uuid";


class App extends Component {
 
  componentDidMount(){
    let toggleVal = false;
    $("#container").hide();
    $(function(){
      $('#container').show(4000);
      $("#buttonId").animate("slide", { direction: "left" }, 3000); 
      toggleVal=false
    })
    $('#buttonId').on('click', function(){
      if (!toggleVal){
      $('#container').hide("slow");
      $("#buttonId").animate("slide", { direction: "right" }, 3000);
      toggleVal=true  
      }else{
        $('#container').show(4000);
        $("#buttonId").animate("slide", { direction: "left" }, 3000); 
        toggleVal=false
      }
    })
  }
  render(){ 
    let cards = [
      {
        key: uuidv4(),
        content: <embed type="text/html" src="https://d-and-d-randomizer.herokuapp.com/"  width="700" height="500"/>
      },
      {
        key: uuidv4(),
        content: <iframe frameborder="1" width="700px" height="500px" src="https://replit.com/@ChristineOng1/turtles2?embed=true"></iframe>
      },
      {
        key: uuidv4(),
        content: <iframe frameborder="1" width="700px" height="500px" src="https://replit.com/@ChristineOng1/turtles?embed=true"></iframe>
      }
    ];
    return(
    <div className="App">
      <div class="container">
      <div class="scroll-container">
      <div class="scroll-page" id="page-1">
       
        <div class="row" id="buttonId">
      <h3>About Me</h3>
      </div>
      <div class="row aboutcontent" id="container">
        <p id="one"><br/><br/><br/><br/>Hello, my name is Christine Ong. I am a data science student with experience in software and full-stack development.</p>
        <p>I have interned at Tennessee Valley Authority and worked with a team to create a proprietary API and web application to alert users to ongoing alarms in their nuclear facility.</p>
        <p id="two">Below, I've created an interactive portfolio highlighting my skills and past projects I've worked on.</p>
        <p >Enjoy!</p>
        </div>
      </div>
        <div class="row">
        <div class="scroll-page" id="page-2">
      <h3>Skills</h3>
      </div>
      <div class="row">
      <div class="col-sm">
      <Listings id="1" header="Data Science" image="https://i.pinimg.com/474x/4e/ac/68/4eac68d2e998377b74613b1d1932c3af.jpg" langList = {["Python", "SQL", "IBM Data Scientist Certification", "Hackerrank Python Certification"]}/>
      </div>
    <div class="col-sm">
      <Listings id="2" header="Web Development" image="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-web-design-icon-png-image_2038483.jpg" langList = {["C# and .NET", "Javascript", "HTML/CSS", "Node.js", "React"]} />
    </div>
    <div class="col-sm">
      <Listings id="3" header="Mobile Development" image="https://media.istockphoto.com/vectors/mobile-phone-icon-vector-line-art-outline-smartphone-symbol-simple-vector-id899623028?k=20&m=899623028&s=612x612&w=0&h=SpcOcFlrZnCmbBMjKTgP2zcclbkQOrMKxoSPKCd5sVo=" langList = {["Swift", "XCode"]} />
    </div>
    <div class="col-sm">
      <Listings id="4" header="Git" image="data:image/png;base64,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" langList = {["Gitlab", "Github", "Git Command Line Interface"]} />
    </div>
    </div>
    </div>
    <br></br>
    <br></br>
    <div class="scroll-page" id="page-3">
      <h3>Projects</h3>
      <Example
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
    </div>
    </div>
    </div>
  )
  };
}

export default App;
