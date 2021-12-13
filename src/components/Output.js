import React, { Component } from 'react';

class PersonalOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h3>{this.props.Personal.firstname}  {this.props.Personal.lastname}</h3>
                <p>{this.props.Personal.title}</p>
                <p>{this.props.Personal.address}</p>
                <p><i>Tel : {this.props.Personal.phone}</i></p>
                <p><i>E-mail : {this.props.Personal.email}</i></p>
                <p><i>Synopsis : {this.props.Personal.description}</i></p>
            </div>
        );
    }
}

class EducationOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>From : {this.props.Edu.efrom}  -
                    To : {this.props.Edu.eto}</p>
                <p>School : {this.props.Edu.school},
                    Degree : {this.props.Edu.degree},
                    Subject : {this.props.Edu.subject}</p>
            </div>
        );
    }
}

class WorkOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <p>From : {this.props.Work.efrom}  -
                    To : {this.props.Work.eto}</p>
                <p>Company : {this.props.Work.company},
                    Position : {this.props.Work.position},
                    Role : {this.props.Work.role}</p>
            </div>
        );
    }
}

export { PersonalOutput, EducationOutput, WorkOutput }