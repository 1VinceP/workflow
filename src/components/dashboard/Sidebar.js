import './dashboard.css';
import AnalyticsIcon from './images/analytics.svg';
import CompanyIcon from './images/company.svg';
import ProjectIcon from './images/project.svg';
import TeamsIcon from './images/teams.svg';
import UserIcon from './images/user.svg';
import React from 'react'

export default function () {
    return (
        <div className='dashboard-side-nav-body'>
            <a href='/#/dashboard'>
            <div className='dashboard-sidenav-title'>Home</div>
            </a>
            <div className='dashboard-sidenav-title-divider'></div>
            <div className='dashboard-sidenav-links-all'>
                <a href='/#/display-users' className='dashboard-side-nav-selections-cont'>
                    <img src={UserIcon} className='dashboard-icon-sidenav' />
                    <div className='dashboard-text-sidenav'>Users</div>
                </a>

                <a href='/#/display-teams' className='dashboard-side-nav-selections-cont'>
                    <img src={TeamsIcon} className='dashboard-icon-sidenav' />
                    <div className='dashboard-text-sidenav'>Teams</div>
                </a>

                <a href='/#/company-info' className='dashboard-side-nav-selections-cont'>
                    <img src={CompanyIcon} className='dashboard-icon-sidenav' />
                    <div className='dashboard-text-sidenav'>Company</div>
                </a>

                <a href='/#/display-projects' className='dashboard-side-nav-selections-cont'>
                    <img src={ProjectIcon} className='dashboard-icon-sidenav' />
                    <div className='dashboard-text-sidenav'>Projects</div>
                </a>

                <a href='/#/analytics' className='dashboard-side-nav-selections-cont'>
                    <img src={AnalyticsIcon} className='dashboard-icon-sidenav' />
                    <div className='dashboard-text-sidenav'>Analytics</div>
                </a>

            </div>
        </div>

    )
}
