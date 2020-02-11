import React from "react";

const SORT_BY_OPTIONS = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: SORT_BY_OPTIONS["Best Match"]
        };
    }

    getSortByClass(sortByOption) {
        return sortByOption === this.state.sortBy ? 'active' : '';
    }

    renderSortByOptions() {
        return Object.keys(SORT_BY_OPTIONS).map(key => {
            const value = SORT_BY_OPTIONS[key];
            return <li key={value}
                        className={this.getSortByClass(value)}
                        onClick={this.handleSortByChange.bind(this, value)}>{key}</li>
        });
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
       
    }
}

export default SearchBar;
