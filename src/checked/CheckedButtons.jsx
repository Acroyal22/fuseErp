import React, { useState } from 'react';
import "./check.css"
const CheckedButtons = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        <h2 className='text-[#0F172A] font-semibold mb-5'>Create New Service Invoice</h2>
      {/* <label className="flex items-center space-x-2">
        <input
          type="radio"
          className="form-radio text-green-500"
          checked={selectedOption === 'customer-details'}
          onChange={() => handleOptionChange('customer-details')}
        />
        <span className={selectedOption === 'customer-details' ? 'text-green-500 font-semibold' : 'text-green-500 font-semibold' }>
          Customer Details
        </span>
      </label>

    

       */}
      
<label class="container text-[#059669]">Customer Details
  <input type="checkbox" checked="checked"/>
  <span className="checkmark"></span>
</label>
<label class="container text-[#2563EB]">Invoice Details
  <input type="checkbox"/>
  <span class="checkmark2"></span>
</label>
<label class="container text-[#475569]">Invoice
<input
          type="checkbox"
          className="form-radio"
          checked={selectedOption === 'customer-details'}
          onChange={() => handleOptionChange('customer-details')}
        />
        {/* <span className={selectedOption === 'customer-details' ? 'text-green-500' : ''}>
          Customer Details
        </span> */}
  <span class="checkmark3"></span>
</label>

    
    </div>
  );
};

export default CheckedButtons;
