import React, {Component} from 'react';
import Project from './Project';
import '../styles/DirectoryMenu.scss';

class ProjectMenu extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [{
                
                title: 'Web Marks',
                description: 'Built a web application that allows people to save and organize web URLs on boards based on specific subjects or collections.',
                imageUrl: '../assets/webMarks.png',
                id: 1,
                gitUrl:'',
                linkUrl:'',
            

            },
            {
                
                title: 'Task Tracker',
                description: 'Team project to build a web application to help organize and keep track of tasks. Redesigned the View. Added new features to optimize the project.',
                imageUrl: "../assets/taskTracker.png",
                id: 2,
                gitUrl:'',
                linkUrl:'',
                
            },
            {
                
                title: 'Photography Portfolio',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu.',
                imageUrl: '../assets/asWebsite.png',
                id: 3,
                gitUrl:'',
                linkUrl:'',

                
            },
         
        
       
            ]
        };
    }
    render(){
        return(
           
            <div className= 'directory-menu'>
               
               {
                    this.state.sections.map(({id, ...SectionProps}) => (
                        <Project key={id} {...SectionProps}/>
                    ))
                }
              
            </div>
           
        );

    }
}

export default ProjectMenu;
