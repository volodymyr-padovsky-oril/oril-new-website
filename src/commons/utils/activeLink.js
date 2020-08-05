import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';
const ActiveLink = ({ router, children, ...props }) => {
    const child=Children.only(children);

    let className=child.props.className||'active';
    if (router.pathname.includes(props.href)&&props.activeClassName) {
        className=`${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return<Link{...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);