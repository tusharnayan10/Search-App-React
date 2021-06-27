import React from 'react'
import '../index.css';
class SearchBar extends React.Component {

    state = { term: '' };
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className='search-bar'>
                <div className="ui segment">
                    <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                        <div className="field">
                            <label>Search Image</label>
                            <input type="text" name="search"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })} placeholder="Search Image" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
