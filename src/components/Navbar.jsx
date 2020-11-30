import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav>
                <div>
                    <span className="nav-name">습관 리스트</span>
                </div>  
                <span className="nav-count">진행중 {this.props.count}</span>
            </nav>
        );
    }
}

export default Navbar;