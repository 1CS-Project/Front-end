'use client'
import Image from "next/image"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const isDateAvailable = (date: Date): boolean => {
  // Your logic to determine if the date is available
  // For example, let's say dates after today are available
  const today = new Date();
  return date >= today;
};

function examination() {
  const isDateAvailable = (date: Date): boolean => {
    // Your logic to determine if the date is available
    // For example, let's say dates after today are available
    const today = new Date();
    return date >= today;
  };


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [startDate, setStartDate] = useState<Date | null>(new Date('2024-05-20'));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [endDate, setEndDate] = useState<Date | null>(new Date('2024-06-20'));

  // Function to check if the date is within the available range
  const isDateInRange = (date: Date): boolean => {
    return date >= startDate! && date <= endDate!;
  };

  // Function to apply custom styles to dates within the range
  const customDateStyles = (date: Date): string => {
    return isDateInRange(date) ? 'bg-gradient-to-r from-buttonleft to-buttonright' : '';
  };

  // Function to filter available dates within the range
  const filterAvailableDates = (date: Date): boolean => {
    return isDateInRange(date);
  };


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    closeDialog();
  };


  return (
    <div>
      <div className="flex justify-between items-center">
        <p data-aos="fade-down" className="text-center font-semibold text-xl">
          &apos;🥳&apos; Congratulations on your successful pilgrimage! Now that you&apos;ve reached this important milestone, let&apos;s take the next steps to complete your journey. Here&apos;s what you need to do.
        </p>
        <Image
          data-aos="fade-left"
          src={"/image/medal.png"}
          width={80}
          height={80}
          alt=""
        />
      </div>


      <div className="flex justify-between items-center">

        <div className="p-6">
          <p data-aos="fade-right" className="text-center font-medium text-lg"><span className="font-semibold underline">Step 01:</span>  Determine a day that is convenient for you to visit the doctor:</p>
          <div className="relative max-w-sm mt-4">
            {selectedDate ? (
              <button className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl w-full border-gradient">
                {selectedDate.toLocaleDateString()}
              </button>
            ) : (
              <button
                onClick={openDialog}
                className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl w-full border-gradient"
              >
                Make an appointment
              </button>
            )}

            {isDialogOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
                  <p className="my-2 text-red-500 font-semibold">
                    <span className="font-semibold underline">IMPORTANT:</span> <br /> Once you confirm, you cannot change the appointment.
                  </p>
                  <DatePicker
                    className="bg-gray-300 rounded-lg"
                    selected={selectedDate}
                    onChange={(date: Date) => setSelectedDate(date)}
                    dayClassName={customDateStyles}
                    filterDate={filterAvailableDates}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Date"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={closeDialog}
                      className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDateChange(selectedDate!)}
                      className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        <div>
          <p className="text-lg font-medium"> <span className="font-semibold underline">Step 02:</span> Go to the hospital (Mustapha Bacha) <br /> with these papers to complete the medical examination :</p>
          <ul className="text-lg">
            <li className="my-2">• A qualification certificate issued by the municipal services</li>
            <li className="mb-2">• Card de vaccination - covid - (if exist)</li>
            <li className="mb-2">• Biometric passport.</li>
            <li className="mb-2">• National ID card.</li>
          </ul>

          <p className="text-lg font-medium"> <span className="font-semibold underline">Step 03:</span> After the medical examination, wait for the results from the doctor</p>
          <div className="mt-4 flex gap-4 justify-center items-center">
            <button type="submit" className=" w-[25%] flex justify-center items-center gap-1 bg-gray-300 px-4 py-2 text-white font-medium rounded-lg">
              Failed
            </button>
            <button type="submit" className="w-[25%] flex justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
              Success
            </button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default examination