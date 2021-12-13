import React, { Component } from "react";
import { Personal, PersonalOutput } from "./components/Personal";
import { Education, EducationOutput } from "./components/Education";
import { Work, WorkOutput } from "./components/Work";

class App extends Component {

  constructor() {
    super();

    this.state = {
      countPer: 0,
      arrayInputPer: [],
      arrayDataPer: [],
      arrayOutputPer: [],

      countEdu: 0,
      arrayInputEdu: [],
      arrayDataEdu: [],
      arrayOutputEdu: [],

      countWork: 0,
      arrayInputWork: [],
      arrayDataWork: [],
      arrayOutputWork: [],
    }
  };

  componentDidMount() {
    this.addPerClick();
    this.addEduClick();
    this.addWorkClick();
  }

  view = () => {

    console.log("============");
    console.log(this.state.arrayInputPer);
    console.log(this.state.arrayDataPer);
    console.log(this.state.arrayOutputPer);
  }

  /*************** 0. Personal Section  ******************/

  outputPerData = () => {

    this.setState({
      arrayOutputPer: this.state.arrayDataPer.map((Element) => { return <PersonalOutput Personal={Element} key={Element.key} /> })
    });
  }

  changePerData = (n, newDataObj) => {

    //let items = this.state.arrayDataEdu.filter(i => Number(i.key) !== n); // Delete the old one
    //let items2 = items.concat([newDataObj]); // Add the new one ==> Work but order is swap ! => Not so good

    let items = [...this.state.arrayDataPer];
    let objIndex = this.state.arrayDataPer.findIndex((obj) => Number(obj.key) === n);

    items[objIndex] = newDataObj;

    this.setState({
      arrayDataPer: items,
    }, () => { this.outputPerData(); });
  }

  addPerClick = (e) => {
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx

    const dataInitPer = {    // Object for for Percation array data initialization only
      key: this.state.countPer,
      firstname: '',
      lastname: '',
      title: '',
      address: '',
      phone: '',
      email: '',
      description: '',
    };

    this.setState({
      arrayInputPer: this.state.arrayInputPer.concat(<Personal key={this.state.countPer} index={this.state.countPer} onDel={this.delPerClick} onChangeData={this.changePerData} />),
      arrayDataPer: this.state.arrayDataPer.concat(dataInitPer),
      arrayOutputPer: this.state.arrayOutputPer.concat(<PersonalOutput Personal={dataInitPer} key={this.state.countPer} />),
      countPer: this.state.countPer + 1,
    });
  }


  /*************** 1. Education Section  ******************/

  outputEduData = () => {

    this.setState({
      arrayOutputEdu: this.state.arrayDataEdu.map((Element) => { return <EducationOutput Edu={Element} key={Element.key} /> })
    });
  }

  changeEduData = (n, newDataObj) => {

    //let items = this.state.arrayDataEdu.filter(i => Number(i.key) !== n); // Delete the old one
    //let items2 = items.concat([newDataObj]); // Add the new one ==> Work but order is swap ! => Not so good

    let items = [...this.state.arrayDataEdu];
    let objIndex = this.state.arrayDataEdu.findIndex((obj) => Number(obj.key) === n);

    items[objIndex] = newDataObj;

    this.setState({
      arrayDataEdu: items,
    }, () => { this.outputEduData(); });
  }

  delEduClick = (n) => {
    // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
    // https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array

    this.setState({
      arrayInputEdu: this.state.arrayInputEdu.filter(i => Number(i.key) !== n), // Filter out 'n'th element
      arrayDataEdu: this.state.arrayDataEdu.filter(i => Number(i.key) !== n),
      arrayOutputEdu: this.state.arrayOutputEdu.filter(i => Number(i.key) !== n),
    });
  }

  addEduClick = (e) => {
    // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx

    const dataInitEdu = {    // Object for for Education array data initialization only
      key: this.state.countEdu,
      school: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    };

    this.setState({
      arrayInputEdu: this.state.arrayInputEdu.concat(<Education key={this.state.countEdu} index={this.state.countEdu} onDel={this.delEduClick} onChangeData={this.changeEduData} />),
      arrayDataEdu: this.state.arrayDataEdu.concat(dataInitEdu),
      arrayOutputEdu: this.state.arrayOutputEdu.concat(<EducationOutput Edu={dataInitEdu} key={this.state.countEdu} />),
      countEdu: this.state.countEdu + 1,
    });
  }

  /*************** 2. Work Section  ******************/

  outputWorkData = () => {

    this.setState({
      arrayOutputWork: this.state.arrayDataWork.map((Element) => { return <WorkOutput Work={Element} key={Element.key} /> })
    });
  }

  changeWorkData = (n, newDataObj) => {

    let items = [...this.state.arrayDataWork];
    let objIndex = this.state.arrayDataWork.findIndex((obj) => Number(obj.key) === n);

    items[objIndex] = newDataObj;

    this.setState({
      arrayDataWork: items,
    }, () => { this.outputWorkData(); });
  }

  delWorkClick = (n) => {

    this.setState({
      arrayInputWork: this.state.arrayInputWork.filter(i => Number(i.key) !== n), // Filter out 'n'th element
      arrayDataWork: this.state.arrayDataWork.filter(i => Number(i.key) !== n),
      arrayOutputWork: this.state.arrayOutputWork.filter(i => Number(i.key) !== n),
    });
  }

  addWorkClick = (e) => {

    const dataInitWork = {
      key: this.state.countWork,
      company: '',
      position: '',
      role: '',
      from: '',
      to: '',
    };

    this.setState({
      arrayInputWork: this.state.arrayInputWork.concat(<Work key={this.state.countWork} index={this.state.countWork} onDel={this.delWorkClick} onChangeData={this.changeWorkData} />),
      arrayDataWork: this.state.arrayDataWork.concat(dataInitWork),
      arrayOutputWork: this.state.arrayOutputWork.concat(<WorkOutput Work={dataInitWork} key={this.state.countWork} />),
      countWork: this.state.countWork + 1,
    });
  }


  render() {
    return (
      <div className="content">
        <div className="left">
          <h1><i>Resume input section</i></h1>
          <button onClick={this.view}>View</button>
          <h2>Personal data :</h2>
          {this.state.arrayInputPer}
          <hr />

          <h2>Work Experience data : <button onClick={e => this.addWorkClick(e)}>+</button></h2>
          {this.state.arrayInputWork}
          <hr />

          <h2>Education data : <button onClick={e => this.addEduClick(e)}>+</button></h2>
          {this.state.arrayInputEdu}

        </div>
        <div className="right">
          {this.state.arrayOutputPer}
          <h2>Work Experience data :</h2>
          {this.state.arrayOutputWork}
          <h2>Education data :</h2>
          {this.state.arrayOutputEdu}
        </div>
      </div>
    );
  }
}

export default App;