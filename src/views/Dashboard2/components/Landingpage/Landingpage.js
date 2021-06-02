import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Landingpage.css';
import { withStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const styles = theme => ({});
class Landingpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { className, onSidebarOpen, ...rest } = this.props;

    return (
      <Grid container xs={12}>
        <Grid container xs={12} style={{ justifyContent: 'center' }}>
          <Grid container lg={12} xs={12}>
            <Grid container xs={12} style={{ backgroundColor: '#004289' }}>
              <Grid item lg={1} sm={1} xs={12} align="center">
                <img src={require('../../../../assets/logo4d2.png')} />
              </Grid>
              <Grid container lg={6} sm={8} xs={12} className="navigation-div">
                <Grid item sm xs={12}>
                  <p className="navigation">Cloud Portal</p>
                </Grid>
                <Grid item sm xs={12}>
                  <p className="navigation">Company Apps</p>
                </Grid>
                <Grid item sm xs={12}>
                  <p className="navigation">Personal Apps</p>
                </Grid>
              </Grid>
              <Grid
                item
                lg={5}
                sm={3}
                xs={12}
                align="center"
                className="personIconCover"
                style={{
                  alignSelf: 'center',
                  textAlign: '-webkit-right',
                  paddingRight: '20px'
                }}>
                <AccountCircleIcon className="personIcon" />
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              style={{ marginTop: '40px', justifyContent: 'center' }}>
              <Grid container xs={10}>
                <Grid
                  container
                  xs={12}
                  style={{ justifyContent: 'space-between' }}>
                  <Grid item lg={3} sm={5} xs={12}>
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility">
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    id="removeTextAlign"
                    sm={5}
                    xs={12}
                    style={{ textAlignLast: 'end' }}>
                    <Button className="create-btn">Create App</Button>
                  </Grid>
                </Grid>
                <Grid container xs={12} style={{ marginTop: '50px' }}>
                  <Grid item xs={12}>
                    <p class="contentHeader">Mono Apps</p>
                  </Grid>
                  <Grid container spacing={3} xs={12}>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={12}
                  style={{ marginTop: '50px', marginBottom: '50px' }}>
                  <Grid item xs={12}>
                    <p class="contentHeader">Multi Apps</p>
                  </Grid>
                  <Grid
                    container
                    spacing={3}
                    xs={12}
                    style={{
                      border: '1px solid #bfc5cc',
                      borderRadius: '25px'
                    }}>
                    <Grid item xs={12}>
                      <p class="contentsubHeader">Enterprise Space</p>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md>
                      <Card className="CardCover">
                        <CardContent>
                          <Grid
                            container
                            xs={12}
                            style={{ justifyContent: 'space-between' }}>
                            <Grid item xs={4}>
                              <p className="cardHeader">App 1</p>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              align="center"
                              style={{ alignSelf: 'center' }}>
                              <MoreHorizIcon className="horizonIcon" />
                            </Grid>
                          </Grid>
                          <p className="description">
                            Description of the app...
                          </p>
                          <p className="listHeader">Free Plan</p>
                          <p className="listFeatures">1 Environment(s)</p>
                          <p className="listFeatures">X User(s)/ Total</p>
                          <p className="listFeatures">Y Developers(s)/ Total</p>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
Landingpage.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(Landingpage);
