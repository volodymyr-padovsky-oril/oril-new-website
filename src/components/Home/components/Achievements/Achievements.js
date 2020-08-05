import React, {Component} from "react";
import Link from 'next/link';

export class Achievements extends Component {
    achievements = [
        {name: 'clutch', href: "https://clutch.co/profile/oril"},
        {name: 'upwork', href: "https://www.upwork.com/o/companies/~0165fed1df7da21a1d/"},
        {name: 'you-team', href: "https://youteam.io/partners/oril-inc"},
        {name: 'dou', href: "https://jobs.dou.ua/companies/oril/"},
    ];

    render() {
        return (
            <section className="home__achievements">
                <h3>Achievements</h3>
                <div className="container">
                    {
                        this.achievements.map((achievement, index) => {
                            return (
                                <a href={achievement.href}
                                   key={index}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="link-block">
                                    <img src={"assets/icons/" + achievement.name + "-achievement.png"}
                                         alt={achievement.name}/>
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Achievements;
