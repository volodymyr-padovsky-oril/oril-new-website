import React, {Component} from "react";
import OurWorks from "../Home/components/OurWorks/OurWorks";

class CaseStudy extends Component {

    render() {
        const {data} = this.props;
        return (
            <section className="case-study">
                <div className="container">
                    <div className="case-study__header">
                        <div className="case-study__left">
                            <img src={`../assets/icons/${data.logo}.${data.logoExt}`} alt={data.logo}/>
                            <h2>
                                {data.headerTitle}
                            </h2>
                            <a style={{color: data.linkColor}}
                                href={data.link}
                               target="_blank"
                               rel="noopener noreferrer">{data.link}</a>
                            <p>
                                {data.headerText}
                            </p>
                        </div>
                        <div className="case-study__right">
                            <img src={`../assets/img/${data.headerImg}.jpg`} alt={data.headerImg}/>
                        </div>
                    </div>
                    <div className="case-study__properties">
                        <div className="case-study__left">
                            {data.properties.map((property, index) => (
                                <div key={index}>
                                    <h4>{property.title}</h4>
                                    <span>{property.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="case-study__right">
                            {data.teams &&
                            <div className="team">
                                <h3>Team</h3>
                                {data.teams.map((team, index) => (
                                    <div key={index}>
                                        <span>{team}</span>
                                    </div>
                                ))}
                            </div>}
                            <div className="tags">
                                {data.tags.map((tag, index) => (
                                    <div key={index}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="case-study__poster">
                        <img style={!data.posterTitle ? { width: 'auto'} : {width: '666px'}} src={`../assets/img/${data.posterImg}.jpg`} alt={data.posterImg}/>
                        {data.posterTitle && <h3>
                            {data.posterTitle}
                        </h3>}

                    </div>
                </div>
                <div className="case-study__ux-process">
                    <div className="container">
                        <h2>UX Process</h2>
                        <p>
                            {data.uxProcessSubTitle}
                        </p>
                        {data.uxProcessImg &&
                        <img src={`../assets/icons/${data.uxProcessImg}.${data.uxProcessImgExt}`} alt={data.uxProcessImg} style={{width: '100%'}}/>}
                    </div>
                    {data.uxProcessImgFull &&
                    <img src={`../assets/icons/${data.uxProcessImgFull}.${data.uxProcessImgFullExt}`} alt={data.uxProcessImgFull}/>}
                </div>
                <div className="container">
                    <div className="case-study__ui-concept">
                        <h2>UI Concept</h2>
                        <p>
                            {data.uiConceptSubTitle}
                        </p>
                        <div className="case-study__palette">
                            <div className="shape">
                                {data.uiConceptLeafs ? data.uiConceptLeafs.map((leaf, index) => (
                                        <div className="shape__leaf" key={index}>
                                            <img src={`../assets/icons/${leaf.img}.svg`} alt={leaf.img}/>
                                            <span>{leaf.title}</span>
                                        </div>
                                    )) :
                                    data.uiConceptShapes.map((shape, index) => (
                                        <div className="shape__square" key={index}
                                             style={shape.style}>{shape.color}</div>
                                    ))
                                }
                            </div>
                            <div className="fonts">
                                <span style={data.uiConceptFontStyle} className="fonts--big">Aa</span>
                                <span style={data.uiConceptFontStyleColor} className="fonts--green">{data.uiConceptFont}</span>
                                <span
                                    style={data.uiConceptFontStyle}
                                    className="fonts--regular-big">a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                <span
                                    style={data.uiConceptFontStyle}
                                    className="fonts--regular">a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                <span
                                    style={data.uiConceptFontStyle}
                                    className="fonts--regular">0123456789</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="case-study__big-image">
                    <img src={`../assets/img/${data.bigImage}.jpg`} alt={data.bigImage}/>
                </div>
                <div className="container">
                    <div className="case-study__our-process">
                        <h2>Our Process</h2>
                        <div className="our-process__wrapper">
                            <div className="our-process__item">
                                <div>
                                    <div></div>
                                </div>
                                <h5>Research & Product Design</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                                    ultricies id fermentum vel, porta et eros. Vestibulum condimentum
                                    lectus in convallis feugiat. Sed vulputate fringilla felis.
                                </p>
                                <span>1 week</span>
                            </div>
                            <div className="our-process__item">
                                <div>
                                    <div></div>
                                </div>
                                <h5>Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                                    ultricies id fermentum vel, porta et eros. Vestibulum condimentum
                                    lectus in convallis feugiat. Sed vulputate fringilla felis.
                                </p>
                                <span>1 week</span>
                            </div>
                            <div className="our-process__item">
                                <div className="our-process__item--last">
                                    <div></div>
                                </div>
                                <h5>Iterative Improvement</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                                    ultricies id fermentum vel, porta et eros. Vestibulum condimentum
                                    lectus in convallis feugiat. Sed vulputate fringilla felis.
                                </p>
                                <span>1 week</span>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <h4>MVP</h4>*/}
                        {/*    <div className="case-study__mvp">*/}
                        {/*        <div className="process__wrapper--top">*/}
                        {/*            {data.ourProcessItem.map((process, index) => (*/}
                        {/*                <div className="process__item" key={index}>*/}
                        {/*                    <span>{process.title}</span>*/}
                        {/*                    <div className="process__dot">*/}
                        {/*                        <div></div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="process__img"*/}
                        {/*                         style={{backgroundImage: 'url("/assets/icons/research.svg")'}}/>*/}
                        {/*                    <p>{process.date}</p>*/}
                        {/*                    /!*<ul>*!/*/}
                        {/*                    /!*    {data.ourProcessItem.points.map((points, index) => (*!/*/}
                        {/*                    /!*        <li>k</li>*!/*/}
                        {/*                    /!*    ))}*!/*/}

                        {/*                    /!*</ul>*!/*/}
                        {/*                    /!*{data.ourProcessItem.points.map((points) => {*!/*/}
                        {/*                    /!*    return (*!/*/}
                        {/*                    /!*                <li>{points}</li>*!/*/}

                        {/*                    /!*    );*!/*/}
                        {/*                    /!*})}*!/*/}
                        {/*                </div>*/}
                        {/*            ))}*/}
                        {/*        </div>*/}
                        {/*        <div className="case-study__upgrades">*/}
                        {/*            <h4 className="upgrades-title">Continuous <br/>Upgrades</h4>*/}
                        {/*            <div className="process__wrapper--bottom">*/}
                        {/*                <div className="process__item">*/}
                        {/*                    <span>Research</span>*/}
                        {/*                    <div className="process__dot">*/}
                        {/*                        <div></div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="process__img"*/}
                        {/*                         style={{backgroundImage: 'url("/assets/icons/research.svg")'}}/>*/}
                        {/*                    <p>1 week</p>*/}
                        {/*                    <ul>*/}
                        {/*                        <li>Lorem ipsum dolor sit amet</li>*/}
                        {/*                        <li>Lorem ipsum dolor sit amet</li>*/}
                        {/*                        <li>Lorem ipsum dolor sit amet</li>*/}
                        {/*                        <li>Lorem ipsum dolor sit amet</li>*/}
                        {/*                    </ul>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="case-study__technologies">
                        <h2>{data.technoTitle}</h2>
                        <p>
                            {data.technoSubTitle}
                        </p>
                        <div className="technologies__wrapper">
                            {data.technoItems.map((technoItem, index) => (
                                <div className="technologies__item" key={index}>
                                    <div>
                                        <img src={`../assets/img/${technoItem.img}.png`}
                                             alt="angular"/>
                                    </div>
                                    <span>{technoItem.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="case-study__our-results">
                        <h2>Our results</h2>
                        <p>
                            {data.ourResultsSubTile}
                        </p>
                        <div className="slide__footer">
                            <div className="customer">
                                <img
                                    src={`../assets/icons/${data.ourResultsCustomerImg}.jpeg`}
                                    alt='kuntz'/>
                                <div>
                                    <p>{data.ourResultsCustomerName}</p>
                                    <p>{data.ourResultsCustomerPosition}</p>
                                </div>
                            </div>
                            <div className="feedback">
                                {data.ourResultsCustomerFeedback}
                            </div>
                        </div>
                        <div className="our-results__points">
                            {data.ourResultsCustomerPoints.map((customerPoint, index) => (
                                <div className="our-results__item" key={index}>
                                    <div className="our-results__circle">
                                        {customerPoint.circle}
                                    </div>
                                    <span>{customerPoint.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="case-study__our-works">
                    <h2>A few more Case Studies you might <br/> be interested in</h2>
                    <OurWorks title={false}/>
                </div>
            </section>
        );
    }
}

export default CaseStudy;
