import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Profile from './containers/profile/Profile';
import Content from './containers/content/Content';

const style = {
  h3: {
    margin: '0.5em',
    textAlign:'center'
  },
  margin : {
    marginLeft: '1em'
  }
}  


class App extends Component {
    render(){
        return (
          <div>
          {/* Heads up! We apply there some custom styling, you usually will not need it. */}
          <style>
            {`
            body {
              background-color: #E7EEF7 !important;
            }
          }
          `}
          </style>
      
          <Grid columns={2} stackable style={style.h3}>
            <Grid.Row>
              <Grid.Column>
                <Content />
              </Grid.Column>
              <Grid.Column>
                <Profile />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        )
    }
}

export default App;