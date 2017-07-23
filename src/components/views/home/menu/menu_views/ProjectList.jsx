import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ProjectItem from './components/ProjectItem';
import performRequest from 'api/get.js';

export default class ProjectList extends Component {

    constructor(props) {
      super(props);
      this.state = {
          loadSuccess: false,
          loadingColor: 'orange',
          loading: true,
          repos: null
      };
    }


// TODO: Combine get USER ajax request with get REPO
   componentDidMount() {
       performRequest("joroze")
        .then((data) => {
            this.setState({
                loadSuccess: true,
                repos: data,
                loadingColor: 'blue'
            })
        })
        .catch((error) => {
            this.setState({
                loadingColor: 'red'
            })
        })
        .then(() => {
            this.setState({
                loading: false
            })
        });
   }

    render(){
        return (
            <div>
                {this.state.loadSuccess ?
                    <Segment raised padded color='blue'>
                        <ProjectItem
                            repos={this.state.repos}
                        >
                        </ProjectItem>
                    </Segment> :
                    <Segment raised padded='very' loading={this.state.loading} color={this.state.loadingColor}>GitHub cannot be reached.</Segment>
                }
            </div>
        );
    }
}
