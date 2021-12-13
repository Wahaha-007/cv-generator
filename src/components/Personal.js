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
                    {/*<input value={this.state.description} onChange={e => this.handleChange(e)} type="file" name="description" accept="image/png, image/gif, image/jpeg" placeholder="Description" />*/}
                    <input value={this.state.description} onChange={e => this.handleChange(e)} type="text" name="description" placeholder="Description" />
                </form>
            </div>
        );
    }
}

class PersonalOutput extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>{this.props.Personal.firstname}  {this.props.Personal.lastname}</h1>
                <h3>{this.props.Personal.title}</h3>
                <h3>{this.props.Personal.address}</h3>
                <p><i>Tel : {this.props.Personal.phone}</i></p>
                <p><i>E-mail : {this.props.Personal.email}</i></p>
                <p><i>Synopsis : {this.props.Personal.description}</i></p>
            </div>
        );
    }
}

export { Personal, PersonalOutput }