import React, {Component} from "react";

export class CompanyInfo extends Component {
    socials = [
        { link: 'https://www.linkedin.com/company/oril-software', name: 'LinkedIn' },
        { link: 'https://www.facebook.com/orilsoftware', name: 'Facebook' },
        { link: 'https://clutch.co/profile/oril', name: 'Clutch' },
        { link: 'https://www.instagram.com/orilsoftware', name: 'Instagram' },
        { link: 'https://www.behance.net/oril-software', name: 'Behance' },
        { link: 'https://twitter.com/orilsoftware', name: 'Twitter' }
    ];

    render() {
        return (
          <>
              <div className="collapse-template__content__info">
                  <div>
                      <p className="collapse-template__content__info--title">Address</p>
                      <a href="https://goo.gl/maps/PWW2kZmqFzB2"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="collapse-template__content__info--text">
                          68 Jay Street Brooklyn, NY, 11201
                      </a>
                  </div>
                  <div>
                      <p className="collapse-template__content__info--title">Inquires & Information</p>
                      <a href="mailto:contact@oril.co"
                         className="collapse-template__content__info--text"
                         rel="noopener noreferrer">
                          contact@oril.co
                      </a>
                  </div>
              </div>
              <div className="collapse-template__content__socials">
                  {
                      this.socials.map((item, index) => {
                          return (
                              <a href={item.link} target="_blank" rel="noopener noreferrer nofollow" key={'social-' + index}>
                                  {item.name}
                              </a>
                          )
                      })
                  }
              </div>
              <div className="collapse-template__content__footer">
                  <p>&copy; 2020, Oril Inc.</p>
                  <p>All rights reserved</p>
              </div>
          </>
        );
    }
}

export default CompanyInfo;
