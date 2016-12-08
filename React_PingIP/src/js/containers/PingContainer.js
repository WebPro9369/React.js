import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import { Chip, ProgressBar, Tooltip, Card, Button, CardTitle, CardActions, CardText} from 'react-mdl';
import {pingActions} from '../actions';
import {SBar} from '../components';

class PingContainer extends Component {
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    success: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
    };
    this.props.dispatch(pingActions.pingIP());
 }
  clickPing(){
    this.props.dispatch(pingActions.pingIP());
  }

  render () {
   
    return (
      <div style={{ width:'60%', textAlign:'center' }}>
         <Card shadow={0} style={{width: '100%', height: 'auto', margin: '10%'}}>
            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) bottom right 15% no-repeat #46B6AC'}}><h3 style={{margin:'auto'}}>{this.props.success}</h3></CardTitle>
            <CardText style={{margin:'auto'}} >
                    To check on availability of "www.google.ca", just click button below
            </CardText>
            <CardActions border>
                <Tooltip label={<span>Click to  <strong>Try to Ping Again</strong></span>}>
                  <Button onClick={this.clickPing.bind(this)} raised colored>Refresh</Button>
                </Tooltip>
            </CardActions>
        </Card>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    success: state.ping.success
  };
}

export default connect(
  mapStateToProps
)(PingContainer);