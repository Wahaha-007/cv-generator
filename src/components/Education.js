import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.index,
            school: '',
            degree: '',
            subject: '',
            efrom: '',
            eto: '',
        }
    }

    handleChange = (e) => {
        // https://medium.com/@jlangkammer/how-to-properly-log-state-change-in-react-588931f708f3
        // setState auto merge feather : https://reactjs.org/docs/forms.html

        this.setState({
            [e.target.name]: e.target.value,
        }, () => { this.props.onChangeData(this.state.key, this.state); });
    }

    render() {

        return (
            <div>
                <form>
                    <input value={this.state.school} onChange={e => this.handleChange(e)} type="text" name="school" placeholder="Shool" />
                    <input value={this.state.degree} onChange={e => this.handleChange(e)} type="text" name="degree" placeholder="Degree" />
                    <input value={this.state.subject} onChange={e => this.handleChange(e)} type="text" name="subject" placeholder="Subject" />
                    <input value={this.state.efrom} onChange={e => this.handleChange(e)} type="text" name="efrom" placeholder="From" />
                    <input value={this.state.eto} onChange={e => this.handleChange(e)} type="text" name="eto" placeholder="To" />
                </form>
                <button className="delButton" onClick={e => this.props.onDel(this.state.key)}>Delete</button>
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

export { Education, EducationOutput }