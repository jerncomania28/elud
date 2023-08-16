import React from 'react';

//components
import DropDown from '../components/DropDown';

//assets
import Success from '../assets/success.svg';
// import Failure from '../assets/failure.svg';

const Transactions: React.FC = () => {
  return (
    <div className="w-full relative">
      <div className="w-full relative flex justify-end">
        <DropDown />
      </div>
      <div className="flex flex-col my-4">
        <h1 className="text-[#122940] text-[20px] md:text-[24px] font-[500]">
          Transactions
        </h1>
        <p className="text-[#285C8F] text-[14px] md:text-[16px] font-[500] my-1">
          Track your transactions history
        </p>
      </div>

      <div className="w-full relative grid grid-cols-8">
        <table className="col-span-6 relative">
          <thead className="text-left">
            <th className="p-4 border-[1px] border-solid border-black">
              Transaction Name
            </th>
            <th className="p-4 border-[1px] border-solid border-black">
              Category
            </th>
            <th className="p-4 border-[1px] border-solid border-black">Date</th>
            <th className="p-4 border-[1px] border-solid border-black">
              Status
            </th>
            <th className="p-4 border-[1px] border-solid border-black">
              Amount
            </th>
          </thead>
          <tbody>
            <tr>
              <td className="flex p-3">
                <img src={Success} alt="success" />
                <span className="mx-2">Matriculation Gown</span>
              </td>
              <td className="p-3">General</td>
              <td className="p-3">Mar 06, 2023</td>
              <td className="p-3">Success</td>
              <td className="p-3">-&#8358;500</td>
            </tr>
            <tr>
              <td className="flex p-3">
                <img src={Success} alt="success" />
                <span className="mx-2">Matriculation Gown</span>
              </td>
              <td className="p-3">General</td>
              <td className="p-3">Mar 06, 2023</td>
              <td className="p-3">Success</td>
              <td className="p-3">-&#8358;500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
