import React, {
    Component
} from 'react';
import {
    Segment
} from 'semantic-ui-react'
import JobItems from './components/JobItems';
import './JobList.css';

export default class JobList extends Component {
    render() {
        return (
            <Segment raised color='blue'>
                <JobItems/>
            </Segment>
        );
    }
}
