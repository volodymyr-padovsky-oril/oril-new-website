import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import Slide from "../../Slide/components/Slide";

export class PortfolioIoT extends Component {
    params = {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    };

    nuravine = {
        logo: {
            name: 'nuravine-logo',
            extension: '.png'
        },
        title: 'Nuravine',
        tags: ['#WebApp', '#USA'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium dapibus',
        info: [
            { value: '70%', text: 'customers use iOS or Android app' },
            { value: '4.8', text: 'rating an AppStore' },
            { value: '11.245', text: 'monthly active users' }
        ],
        img: {
            name: 'nuravine',
            extension: '.png'
        },
        customer: {
            img: {
                name: 'adult-businessman-concentration-1586996',
                extension: '.png'
            },
            firstName: 'Adrian',
            lastName: 'Logan',
            position: 'CEO of Nuravine',
            feedback: `
                    “This team provides quick and quality work. They were able
                    to quickly turn our ideas into a functioning and professional dashboard.”
                `
        }
    };

    cc = {
        logo: {
            name: 'connected-copper',
            extension: '.png'
        },
        title: 'Connected Copper',
        tags: ['#WebApp', '#Mobile', '#USA'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium dapibus',
        info: [
            { value: '70%', text: 'customers use iOS or Android app' },
            { value: '4.8', text: 'rating an AppStore' },
            { value: '11.245', text: 'monthly active users' }
        ],
        img: {
            name: 'cc',
            extension: '.png'
        },
        customer: {
            img: {
                name: 'adult-business-businessman-2182970',
                extension: '.png'
            },
            firstName: 'Morris',
            lastName: 'Zeitouni',
            position: 'CEO of Connected Copper',
            feedback: `
                “Ac placerat vestibulum lectus mauris ultrices eros in cursus.
                Sed arcu non odio euismod. Eu tincidunt tortor aliquam nulla facilisi cras fermentum”
            `
        }
    };

    greenVision = {
        logo: {
            name: 'gv-logo',
            extension: '.png'
        },
        title: 'GreenVision',
        tags: ['#WebApp', '#Mobile'],
        text: `
            Green Vision is a platform that allows anyone to envision their future without 
            Carbon Dioxide emissions: both on the scale of personal home and on the US scale.\n +
            Venenatis tellus in metus vulputate eu scelerisque. Mi in nulla posuere sollicitudin`,
        info: [
            { value: '70%', text: 'customers use iOS or Android app' },
            { value: '4.8', text: 'rating an AppStore' }
        ],
        img: {
            name: 'gv',
            extension: '.png'
        },
        customer: {
            img: {
                name: 'beautiful-cute-daylight-1251171',
                extension: '.png'
            },
            firstName: 'Lauren',
            lastName: 'Kunz',
            position: 'CEO of GreenVision',
            feedback: `
                Bibendum enim facilisis gravida neque. Id semper risus in hendrerit gravida rutrum.
                Egestas purus viverra accumsan in. Neque sodales ut etiam sit. Volutpat maecenas volutpat
                blandit aliquam etiam erat velit scelerisque in
            `
        }
    };

    render() {
        return (
            <div className="slider-wrapper">
                <Swiper {...this.params}>
                    <div><Slide data={this.nuravine} /></div>
                    <div><Slide data={this.cc} /></div>
                    <div><Slide data={this.greenVision} /></div>
                </Swiper>
            </div>
        );
    }
}

export default PortfolioIoT;
