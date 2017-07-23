import React from 'react'
import { Item } from 'semantic-ui-react'

const JobItems = () => (
  <Item.Group divided >
      <Item>
          <Item.Image size='tiny' src='https://www.remedypartners.com/wp-content/uploads/2016/08/solo_mark.png' />

          <Item.Content verticalAlign='middle'>
              <Item.Header href="https://www.remedypartners.com/" target="_blank" rel="noopener noreferrer">Remedy Partners</Item.Header>
              <Item.Meta>
                  <span className='jobrole'>Junior Software Engineer</span>
              </Item.Meta>
              <Item.Description>Jr. Software Engineer on the Front End team working with the MEAN Stack.</Item.Description>
              <Item.Extra>2 Months (Ongoing)</Item.Extra>
          </Item.Content>
      </Item>

      <Item>
          <Item.Image size='tiny' src='http://suny.oneonta.edu/themes/de_theme/logo.svg' />

          <Item.Content verticalAlign='middle'>
              <Item.Header href="http://suny.oneonta.edu/" target="_blank" rel="noopener noreferrer">SUNY Oneonta</Item.Header>
              <Item.Meta>
                  <span className='jobrole'>Student</span>
              </Item.Meta>
              <Item.Description>Studied Computer Science and Mathematics</Item.Description>
          </Item.Content>
      </Item>

      <Item>
          <Item.Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/8/82/Nielsen_logo.svg' />

          <Item.Content verticalAlign='middle'>
              <Item.Header href="http://www.nielsen.com/" target="_blank" rel="noopener noreferrer">Nielsen</Item.Header>
              <Item.Meta>
                  <span className='jobrole'>Software Engineering Intern</span>
              </Item.Meta>
              <Item.Description>Software Engineering Intern (Backend - CPS Delivery Team)</Item.Description>
              <Item.Extra>3 Months</Item.Extra>
          </Item.Content>
      </Item>
  </Item.Group>
);

export default JobItems;
