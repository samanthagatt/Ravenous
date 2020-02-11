import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        let businesses;
        if (this.props.businesses !== undefined) {
            businesses = this.props.businesses.map(business =>
                <Business business={business} key={business.id} />
            )
        }
        return (
            <div className="BusinessList">
                { businesses === undefined ? "No results" : businesses }
            </div>
        );
    }
}

export default BusinessList;
