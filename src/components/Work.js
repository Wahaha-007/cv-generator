import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.index,
            company: '',
            position: '',
            role: '',
            efrom: '',
            eto: '',
        }
    }

    handleChange = (e) => {
        // https://medium.com/@jlangkammer/how-to-properly-log-state-change-in-react-588931f708f3
        // setState auto merge feather : https://reactjs.org/docs/forms.html

        this.setState({
            [e.target.name]: e.target.value,
        }, () => { this.props.onChangeData(this.state.key, this.state); }); // Send everything to Parent
    }

    render() {

        return (
            <div>
                <form>
                    <input value={this.state.company} onChange={e => this.handleChange(e)} type="text" name="company" placeholder="Company" />
                    <input value={this.state.position} onChange={e => this.handleChange(e)} type="text" name="position" placeholder="Position" />
                    <input value={this.state.role} onChange={e => this.handleChange(e)} type="text" name="role" placeholder="Role" />
                    <input value={this.state.efrom} onChange={e => this.handleChange(e)} type="text" name="efrom" placeholder="From" />
                    <input value={this.state.eto} onChange={e => this.handleChange(e)} type="text" name="eto" placeholder="To" />
                </form>
                <button className="delButton" onClick={e => this.props.onDel(this.state.key)}>Delete</button>
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

export { Work, WorkOutput }