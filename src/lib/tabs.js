import Portfolio from "../components/Portfolio/Portfolio";
import React from "react";
import {project} from "./our-projects";

export const tabs = [
    {
        id: 'real-estate',
        href: '/portfolio/real-estate',
        title: 'Real Estate',
        component: () => <Portfolio slides={[project.greenVision]}/>
    },
    {
        id: 'iot',
        title: 'IoT',
        href: '/portfolio/iot',
        component: () => <Portfolio slides={[project.vicki, project.nuravine]}/>
    },
    {
        id: 'fin-tech',
        href: '/portfolio/fin-tech',
        title: 'FinTech',
        component: () => <Portfolio slides={[project.sab, project.scroogeBot]}/>
    },
    {
        id: 'marketplace',
        href: '/portfolio/marketplace',
        title: 'Marketplace',
        component: () => <Portfolio
            slides={[project.laced, project.gowago, project.kable, project.hoozeOn, project.myn,]}/>
    },
    {
        id: 'lifestyle-and-fitness',
        href: '/portfolio/lifestyle',
        title: 'Health & Fitness',
        component: () => <Portfolio slides={[project.as, project.imlca, project.bloods]}/>
    },
    {
        id: 'other',
        href: '/portfolio/other',
        title: 'Other',
        component: () => <Portfolio slides={[project.stick, project.plusDelta]}/>
    }
];