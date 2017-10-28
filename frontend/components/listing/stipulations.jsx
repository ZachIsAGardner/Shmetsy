import React from 'react';

class Stipulations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stipulations">
        <h4>All categories</h4>

        <div>
          <ul>
            <li>Clothing</li>
            <li>Craft Supplies & Tools</li>
            <li>Accessories</li>
            <li>Art & Collectibles</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Stipulations;
