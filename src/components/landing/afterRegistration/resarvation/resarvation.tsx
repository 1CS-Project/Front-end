'use client'
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react";
import Select, { MultiValue } from 'react-select';
interface OptionType {
  label: string;
  value: string;
}


function resarvation() {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedBaladias, setselectedBaladias] = useState<OptionType[]>([]);


  const handleWilayaChange = (selectedOptions: OptionType[]) => {
    setselectedBaladias(selectedOptions);
  };

  const handleDateChange = (selectedOptions: OptionType[]) => {
    setSelectedDate(selectedOptions);
  };

  const handleHotelChange = (selectedOptions: OptionType[]) => {
    setSelectedHotel(selectedOptions);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsGroup(event.target.value === 'group');
    setShowFriendForm(false); // Reset friend form display
  };

  const handlePlacesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlaces(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isGroup) {
      setShowFriendForm(true);
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsConfirmed(true);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isGroup, setIsGroup] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showModal, setShowModal] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showFriendForm, setShowFriendForm] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedDate, setSelectedDate] = useState<OptionType[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedHotel, setSelectedHotel] = useState<OptionType[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [places, setPlaces] = useState<number | undefined>();



  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#F0F5FF',
      color: 'black',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'black', 
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'black', 
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#F0F5FF', 
      color: 'black', 
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#F0F5FF', 
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: 'black', 
    }),
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        {showFriendForm ? (
          <div>
            <h2 className="font-semibold text-xl">Give us informations about your partenaire</h2>
            <h2 className="font-medium text-xl">Your partenaire number <span>1</span></h2>

            <form>
              <label className="block text-lg font-medium text-gray-700 mt-4">
                What is his full name
                <input

                  placeholder="Enter his full name"
                  type="text"
                  name="fullname"
                  onChange={handlePlacesChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#F0F5FF] text-black"
                />
              </label>
              <label className="block text-lg font-medium text-gray-700 mt-4">
                His phone number
                <input

                  placeholder="Enter his phone number"
                  type="number"
                  name="phonenumber"
                  onChange={handlePlacesChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#F0F5FF] text-black"
                />
              </label>
              <label className="block text-lg font-medium text-gray-700 mt-4">
                His Birth certeficate number
                <input

                  placeholder="Enter his Birth certeficate number"
                  type="number"
                  name="birthcert"
                  onChange={handlePlacesChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#F0F5FF] text-black"
                />
              </label>
              <label className="block text-lg font-medium text-gray-700 mt-4">
                His Nationale identification number
                <input

                  placeholder="Enter his Nationale identification number"
                  type="number"
                  name="ident"
                  onChange={handlePlacesChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#F0F5FF] text-black"
                />
              </label>
              <div className="mt-4 flex gap-4 justify-center items-center">
                <button type="submit" className="w-full flex justify-center items-center gap-1 bg-blue-500 px-4 py-2 text-white font-medium rounded-lg">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        ) : isConfirmed ? (
          <div>
            <h2 className="font-semibold text-xl underline">Your Booking Details</h2>
            <p className="mt-4 text-xl font-medium">Booking Type: {isGroup ? 'Group' : 'Individual'}</p>
            <p className="mt-4 text-xl font-medium">Selected Wilaya: {selectedBaladias.map(option => option.label).join(', ')}</p>
            <p className="mt-4 text-xl font-medium">Selected Date: {selectedDate.map(option => option.label).join(', ')}</p>
            {isGroup && <p className="mt-4 text-xl font-medium">Number of Places: {places}</p>}
            <p className="mt-4 text-xl font-medium">Selected Hotel: {selectedHotel.map(option => option.label).join(', ')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="font-semibold text-xl">Complete this information to book flight and hotel</p>

            <div className="mt-4">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="bookingType"
                  value="individual"
                  checked={!isGroup}
                  onChange={handleCheckboxChange}
                  className="form-radio"
                />
                <span className="ml-2 text-xl font-medium">Individual</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="bookingType"
                  value="group"
                  checked={isGroup}
                  onChange={handleCheckboxChange}
                  className="form-radio"
                />
                <span className="ml-2 text-xl font-medium">Group</span>
              </label>
            </div>

            <label className="block text-xl font-medium text-gray-700 mt-4">
              Choose the flight you want to take from any of these wilaya
              <Select
                maxMenuHeight={200}
                placeholder="Oran"
                name="baladias"
                isMulti
                value={selectedBaladias}
                onChange={handleWilayaChange}
                styles={customSelectStyles}
                className="mt-2 block w-full"
              />
            </label>

            <label className="block text-xl font-medium text-gray-700 mt-4">
              Choose a date for this flight
              <Select
                placeholder="From 8 Mars 2023 To 9 avril 2424"
                maxMenuHeight={200}
                name="dates"

                isMulti
                value={selectedDate}
                onChange={handleDateChange}
                styles={customSelectStyles}
                className="mt-2 block w-full"
              />
            </label>

            {isGroup && (
              <label className="block text-xl font-medium text-gray-700 mt-4">
                How many places would you like to book on this trip?
                <input

                  placeholder="Enter places number"
                  type="number"
                  name="places"
                  value={places}
                  onChange={handlePlacesChange}
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#F0F5FF] text-black"
                />
              </label>
            )}

            <label className="block text-xl font-medium text-gray-700 mt-4">
              What hotel would you like to stay in?
              <Select
                placeholder="Sheraton Makkah Jabal Al Kaaba Hotel"
                maxMenuHeight={200}
                name="hotel"

                isMulti
                value={selectedHotel}
                onChange={handleHotelChange}
                styles={customSelectStyles}
                className="mt-2 block w-full"
              />
            </label>

            <div className="mt-4 flex gap-4 justify-center items-center">
              <button type="submit" className="w-full flex justify-center items-center gap-1 bg-blue-500 px-4 py-2 text-white font-medium rounded-lg">
                Confirm
              </button>
            </div>
          </form>
        )}

        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">Reservation Successful</h2>
                <p>Your reservation has been completed successfully.</p>
                <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Image
          className="rounded-lg"
          src={"/image/plane.png"}
          width={400}
          height={800}
          alt="Bankimage"
        />
      </div>
    </div>
  )
}

export default resarvation