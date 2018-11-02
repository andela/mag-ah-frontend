import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import {
  updateProfile,
  getCurrentProfile
} from "../../redux/actions/profileActions";

class EditProfile extends Component {
  state = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    bio: "",
    avatar: "",
    city: "",
    country: "",
    phone: null,
    website: ""
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile.response;
      this.setState({
        username: profile.profile.username,
        email: profile.email,
        firstName: profile.profile.first_name,
        lastName: profile.profile.last_name,
        birthDate: profile.profile.birth_date,
        bio: profile.profile.bio,
        city: profile.profile.city,
        country: profile.profile.country,
        phone: `0${profile.profile.phone}`,
        website: profile.profile.website
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      birthDate,
      bio,
      avatar,
      city,
      country,
      phone,
      website
    } = this.state;
    const profileData = {
      user: {
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        bio,
        avatar,
        city,
        country,
        phone,
        website
      }
    };
    const { updateCurrentProfile } = this.props;
    updateCurrentProfile(profileData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      username,
      email,
      firstName,
      lastName,
      birthDate,
      bio,
      avatar,
      city,
      country,
      phone,
      website
    } = this.state;

    return (
      <div className="container mt-3">
        <div className="row mt-3">
          <section className="col-sm-8 offset-sm-2 mt-3">
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="form-row">
                <div className="form-group col-md-6 mt-3">
                  <TextFieldGroup
                    type="text"
                    name="username"
                    className="form-control border"
                    placeholder="Username"
                    value={username}
                    onChange={e => this.onChange(e)}
                    disabled="disabled"
                  />
                </div>
                <div className="form-group col-md-6 mt-3">
                  <TextFieldGroup
                    type="email"
                    name="email"
                    className="form-control border"
                    placeholder="Email"
                    value={email}
                    onChange={e => this.onChange(e)}
                    disabled="disabled"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <TextFieldGroup
                    type="text"
                    name="firstName"
                    className="form-control border"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => this.onChange(e)}
                    info="First Name"
                  />
                </div>
                <div className="form-group col-md-4">
                  <TextFieldGroup
                    type="text"
                    name="lastName"
                    className="form-control border"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => this.onChange(e)}
                    info="Last Name"
                  />
                </div>
                <div className="form-group col-md-4">
                  <TextFieldGroup
                    type="date"
                    name="birthDate"
                    className="form-control border"
                    placeholder="Birth Date"
                    value={birthDate}
                    onChange={e => this.onChange(e)}
                    info="Date of Birth"
                  />
                </div>
              </div>
              <div className="form-group">
                <TextAreaFieldGroup
                  className="form-control border"
                  name="bio"
                  value={bio}
                  onChange={e => this.onChange(e)}
                  info="Add your bio information here to stand out"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <TextFieldGroup
                    type="text"
                    name="city"
                    className="form-control border"
                    placeholder="e.g Nairobi"
                    value={city}
                    onChange={e => this.onChange(e)}
                    info="City"
                  />
                </div>
                <div className="form-group col-md-6">
                  <TextFieldGroup
                    type="text"
                    name="country"
                    className="form-control border"
                    placeholder="e.g Kenya"
                    value={country}
                    onChange={e => this.onChange(e)}
                    info="Country"
                  />
                </div>
              </div>
              <div className="custom-file mb-3">
                <TextFieldGroup
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  value={avatar}
                  onChange={e => this.onChange(e)}
                  info="Upload new profile image"
                />
              </div>
              <div className="form-row mt-3">
                <div className="form-group col-md-6 mt-3">
                  <TextFieldGroup
                    type="tel"
                    name="phone"
                    className="form-control border"
                    placeholder="Phone e.g 0721000000"
                    pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                    value={phone}
                    onChange={e => this.onChange(e)}
                    info="Phone e.g 0721000000"
                  />
                </div>
                <div className="form-group col-md-6 mt-3">
                  <TextFieldGroup
                    type="url"
                    name="website"
                    className="form-control border"
                    placeholder="Website e.g http://mywebsite.com"
                    value={website}
                    onChange={e => this.onChange(e)}
                    info="Website e.g http://mywebsite.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-outline-primary mr-3">
                  Save
                </button>
                <Link to="/dashboard" className="btn btn-outline-secondary">
                  Cancel
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  updateCurrentProfile: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.instanceOf(Object).isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  error: state.error
});

export default connect(
  mapStateToProps,
  { updateCurrentProfile: updateProfile, getProfile: getCurrentProfile }
)(EditProfile);
