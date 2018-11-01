import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import jwtDecode from "jwt-decode";
import { getCurrentProfile } from "../../redux/actions/profileActions";
import { optNotification } from "../../redux/actions/notificationOpt";

let currentUser;
if (localStorage.getItem("token")) {
  currentUser = jwtDecode(localStorage.getItem("token"));
}
class Dashboard extends Component {
  state = {
    checked: true,
    loaded: false
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
    this.setState({ loaded: true });
  }

  componentWillReceiveProps(nextProps) {
    const { loaded } = this.state;
    if (loaded) {
      this.setState(state => ({
        ...state,
        checked: nextProps.profile.response.profile.app_notification_enabled,
        loaded: false
      }));
    }
  }

  handleChange = checked => {
    const { notificationOpt } = this.props;
    notificationOpt();
    this.setState({ checked });
  };

  render() {
    const { profile, loading } = this.props;
    const { checked } = this.state;

    let dashboardContent;
    if (profile == null || loading) {
      dashboardContent = (
        <div className="mx-auto mt-3">
          <h4 className="text-center mt-3">Loading...</h4>
        </div>
      );
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div className="row mt-3">
          <section className="col-sm-10 offset-sm-1 mt-3">
            <div className="col-sm-8 float-left">
              <div className="col-sm-8">
                <div className="col-sm-9 float-left">
                  <h1 className="ml-0">
                    {profile.response.profile.first_name}{" "}
                    {profile.response.profile.last_name}
                  </h1>
                </div>
                <div className="col-sm-3 float-right mt-1">
                  <Link to="/edit-profile" className="btn btn-outline-primary">
                    Update Profile
                  </Link>
                </div>
              </div>
              <div
                className={
                  profile.response.profile.bio
                    ? "col float-left mx-2"
                    : "col float-left border mx-2"
                }
              >
                <p className="overflow-wrap px-2">
                  {profile.response.profile.bio}
                </p>
              </div>
              <div className="col float-left">
                <div className="col-sm-3 float-left">
                  <small className="text-muted" id="following">
                    47 Following
                  </small>{" "}
                </div>
                <div className="col-sm-9 float-right">
                  <small className="text-muted" id="followers">
                    48 Followers
                  </small>{" "}
                </div>
                {currentUser.username === profile.response.profile.username && (
                  <div className="col-sm-12 d-flex">
                    <small className="d-flex align-items-center mt-2">
                      Turn notifications on/off
                      <Switch
                        className="ml-4"
                        onChange={this.handleChange}
                        checked={checked}
                        id="normal-switch"
                      />
                    </small>
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm-4 float-right mt-3">
              {profile.response.profile.avatar ? (
                <img
                  src={profile.response.profile.avatar}
                  alt=""
                  className="rounded-circle mx-auto d-block"
                  height="120"
                />
              ) : (
                <i className="fa fa-user-circle fa-7x" />
              )}
            </div>
          </section>
        </div>
      );
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome</p>
          <p>You are not logged in. Click on Sign to login</p>
          <Link to="/" className="btn btn-lg btn-info">
            Login
          </Link>
        </div>
      );
    }

    return <div className="container">{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  notificationOpt: PropTypes.func.isRequired,
  profile: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile || {},
  loading: state.profile.loading
});

export default connect(
  mapStateToProps,
  { getProfile: getCurrentProfile, notificationOpt: optNotification }
)(Dashboard);
