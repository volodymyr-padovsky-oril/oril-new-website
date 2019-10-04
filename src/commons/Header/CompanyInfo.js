import React, {Component} from "react";

export class CompanyInfo extends Component {
    socials = [
        { link: 'https://www.linkedin.com/company/oril-software', name: 'LinkedIn' },
        { link: 'https://www.facebook.com/orilsoftware', name: 'Facebook' },
        { link: 'https://medium.com/oril', name: 'Medium' },
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
                      <p className="collapse-template__content__info--text">581 Ella Street, San Francisco, CA</p>
                  </div>
                  <div>
                      <p className="collapse-template__content__info--title">Project Inquiries</p>
                      <p className="collapse-template__content__info--text">sample@orilinc.com</p>
                  </div>
              </div>
              <div className="collapse-template__content__socials">
                  {
                      this.socials.map((item, index) => {
                          return (
                              <a href={item.link} target="_blank" rel="noopener noreferrer" key={'social-' + index}>
                                  {item.name}
                              </a>
                          )
                      })
                  }
              </div>
              <div className="collapse-template__content__footer">
                  <p>&copy; 2019, Oril Inc.</p>
                  <p>All rights reserved</p>
              </div>
          </>
        );
    }
}

export default CompanyInfo;
