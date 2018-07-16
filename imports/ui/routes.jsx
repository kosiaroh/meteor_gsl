import React from ‘react’
import {FlowRouter} from ‘meteor/kadira:flow-router’
import {mount} from ‘react-mounter’
 
import App from ‘/imports/ui/App’
import HomePage from ‘/imports/ui/Home.jsx’
import AboutPage from ‘/imports/ui/About’
 
FlowRouter.route(‘/’, {
 	name: ‘Home’,
 	action(){
       	mount( App, {
            	content: <HomePage />
       	})
 	}
})
 
FlowRouter.route(‘/about’, {
 	name: ‘About’,
 	action(){
       	mount( App, {
            	content: <AboutPage />
       	})
 	}
})
