import React from 'react'; // Assuming you include your custom CSS here

const VerticalSlider: React.FC = () => {
  const sliderOneItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const sliderTwoItems = ['Item A', 'Item B', 'Item C', 'Item D'];

  return (
    <div className="flex justify-center space-x-10 p-10">
      <div className="verticalcolumnone">
        <div className="carouselverticalone">
          {sliderOneItems.map((item, index) => (
            <div key={index} className="text-white bg-blue-600 text-center p-5 mb-2 rounded shadow-lg">
              {item}
            </div>
          ))}
          {sliderOneItems.map((item, index) => (
            <div key={index} className="text-white bg-blue-600 text-center p-5 mb-2 rounded shadow-lg">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="verticalcolumntwo">
        <div className="carouselverticaltwo">
          {sliderTwoItems.map((item, index) => (
            <div key={index} className="text-white bg-green-600 text-center p-5 mb-2 rounded shadow-lg">
              {item}
            </div>
          ))}
          {sliderTwoItems.map((item, index) => (
            <div key={index} className="text-white bg-green-600 text-center p-5 mb-2 rounded shadow-lg">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
