import React from 'react';
import {Snackbar, Button} from 'react-mdl';
export default class SBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }

  handleShowSnackbar() {
    this.setState({
      isSnackbarActive: true
    });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  handleClickActionSnackbar() {
    this.setState({
      btnBgColor: ''
    });
  }
  render() {
    const { btnBgColor, isSnackbarActive } = this.state;
    return (
      <div>
        <Button raised style={{backgroundColor: btnBgColor}} onClick={this.handleShowSnackbar}>Show a Snackbar</Button>
        <Snackbar
          active={isSnackbarActive}
          onClick={this.handleClickActionSnackbar}
          onTimeout={this.handleTimeoutSnackbar}
          action="Undo">Button color changed.</Snackbar>
      </div>
    );
  }
}