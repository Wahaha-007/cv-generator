import React, { Component } from 'react';

class Personal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.index,
            firstname: '',
            lastname: '',
            title: '',
            address: '',
            phone: '',
            email: '',
            description: '',
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
                    <input value={this.state.firstname} onChange={e => this.handleChange(e)} type="text" name="firstname" placeholder="First Name" />
                    <input value={this.state.lastname} onChange={e => this.handleChange(e)} type="text" name="lastname" placeholder="Last Name" />
                    <input value={this.state.title} onChange={e => this.handleChange(e)} type="text" name="title" placeholder="Title" />
                    <input value={this.state.address} onChange={e => this.handleChange(e)} type="text" name="address" placeholder="Address" />
                    <input value={this.state.phone} onChange={e => this.handleChange(e)} type="text" name="phone" placeholder="Phone No." />
                    <input value={this.state.email} onChange={e => this.handleChange(e)} type="text" name="email" placeholder="E-mail" />
                    <input value={this.state.description} onChange={e => this.handleChange(e)} type="text" name="description" placeholder="Description" />
                </form>
            </div>
        );
    }
}

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
                <button onClick={e => this.props.onDel(this.state.key)}>Delete</button>
            </div>
        );
    }
}

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
                <button onClick={e => this.props.onDel(this.state.key)}>Delete</button>
            </div>
        );
    }
}

export { Personal, Education, Work }