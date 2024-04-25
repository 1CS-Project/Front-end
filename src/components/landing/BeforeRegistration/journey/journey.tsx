
'use client'
import React, { useState } from "react";
import Etapehaj from "../etapehaj/etapehaj";
import Hajjdef from "../hajjdef/hajjdef";
import Instruction from "../instruction/instruction";

function Journey() {
  const [showHajjDef, setShowHajjDef] = useState(true);
  const [showGuide, setShowGuide] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showTransport, setShowTransport] = useState(false);

  const handleHajjDefClick = () => {
    setShowHajjDef(true);
    setShowGuide(false);
    setShowInstructions(false);
    setShowTransport(false);
  };

  const handleGuideClick = () => {
    setShowHajjDef(false);
    setShowGuide(true);
    setShowInstructions(false);
    setShowTransport(false);
  };

  const handleInstructionsClick = () => {
    setShowHajjDef(false);
    setShowGuide(false);
    setShowInstructions(true);
    setShowTransport(false);
  };

  const handleTransportClick = () => {
    setShowHajjDef(false);
    setShowGuide(false);
    setShowInstructions(false);
    setShowTransport(true);
  };

  const [activeCard, setActiveCard] = useState("hajjDef");

  const handleCardClick = (card: any) => {
    setActiveCard(card);
  };

  return (
    <section className="mt-20">
      <h1 className="text-center font-semibold text-2xl mt-8">A guide to the Muslim pilgrimage, facilitating the journey</h1>

      <div className="mx-20 cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center justify-between mt-8">
        <div className="flex gap-4">
          <div className={`${activeCard === "hajjDef" ? "bg-gradient-to-r from-buttonleft to-buttonright" : "border-2 border-black"} w-1/2 rounded-md text-center p-4`} onClick={() => handleCardClick("hajjDef")}>
            <svg className="m-auto" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M71.6187 9.17854C34.0364 -0.570347 36.6215 0.109807 36.1378 0.109807C35.654 0.109807 27.6266 2.36188 1.32207 9.17854C0.989456 9.26422 0.695939 9.46059 0.489851 9.73532C0.283764 10.0101 0.177394 10.3468 0.188257 10.69V65.1024C0.18302 65.4625 0.306545 65.8126 0.536585 66.0897C0.766625 66.3668 1.08806 66.5527 1.44301 66.6138C38.6775 73.0829 36.3343 72.6597 36.7274 72.6597L71.4977 66.6138C71.8527 66.5527 72.1741 66.3668 72.4041 66.0897C72.6342 65.8126 72.7577 65.4625 72.7525 65.1024V10.69C72.7633 10.3468 72.657 10.0101 72.4509 9.73532C72.2448 9.46059 71.9513 9.26422 71.6187 9.17854ZM3.21177 54.6582L4.72352 54.7943V57.923L3.21177 57.7265V54.6582ZM10.7705 65.1024L3.21177 63.7874V60.7645L10.7705 61.747V65.1024ZM7.74703 58.316V55.0512L16.8176 55.8372V59.51L7.74703 58.316ZM22.8646 67.2487L13.794 65.7372V62.1551L22.8646 63.334V67.2487ZM19.8411 59.903V56.1092L28.9116 56.8952V61.0819L19.8411 59.903ZM34.9586 69.3496L25.8881 67.8381V63.7421L34.9586 64.921V69.3496ZM34.9586 61.7923L31.9351 61.3993V57.1521L34.9586 57.4242V61.7923ZM34.9586 54.235L3.21177 51.6202V28.6461L34.9586 24.5047V54.235ZM34.9586 21.3004L3.21177 25.5929V24.0815L34.9586 18.5647V21.3004ZM34.9586 15.2546L3.21177 20.983V17.9601L34.9586 11.0527V15.2546ZM34.9586 7.69731L3.21177 14.8616V11.8387L34.9586 3.57104V7.69731ZM37.9821 57.1673L41.0056 56.8952V61.4749L37.9821 61.8679V57.1673ZM47.0526 67.5207L37.9821 69.0322V64.921L47.0526 63.7421V67.5207ZM57.6349 52.4062L48.5644 53.1921V36.5661L57.6349 36.9742V52.4062ZM65.1937 54.7791V58.0439L56.1232 59.2379V55.8372L65.1937 54.7791ZM53.0997 55.8372V59.6309L44.0291 60.8099V56.8952L53.0997 55.8372ZM59.1467 65.4047L50.0761 66.9161V63.334L59.1467 62.1551V65.4047ZM69.729 63.5607L62.1702 65.1024V61.7621L69.729 60.7796V63.5607ZM69.729 57.5149L68.2172 57.7114V54.7943L69.729 54.6582V57.5149ZM69.729 51.4691L60.6584 52.2701V35.6441C60.6584 35.2433 60.4992 34.8588 60.2156 34.5754C59.9321 34.2919 59.5476 34.1327 59.1467 34.1327L47.0526 33.6037C46.6517 33.6037 46.2672 33.7629 45.9837 34.0464C45.7002 34.3298 45.5409 34.7142 45.5409 35.1151V53.7211L37.9821 54.3862V24.5047L69.729 28.6461V51.4691ZM69.729 25.4418L37.9821 21.4516V18.5344L69.729 24.0513V25.4418ZM69.729 20.9074L37.9821 15.4662V11.0527L69.729 17.9601V20.9074ZM69.729 14.786L37.9821 7.95426V3.57104L69.729 11.8538V14.786Z" fill="#2A2A2A" />
            </svg>
            <p className={`${activeCard === "hajjDef" ? "text-white" : ""} font-semibold`}>Hadj Definitions</p>
          </div>
          <div className={`${activeCard === "guide" ? "bg-gradient-to-r from-buttonleft to-buttonright" : "border-2 border-black"} w-1/2 rounded-md text-center p-4`} onClick={() => handleCardClick("guide")}>
            <svg className="m-auto" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_844_20432)">
                <path d="M9.27734 57.5476C9.27734 59.1514 9.91445 60.6895 11.0485 61.8236C12.1826 62.9577 13.7207 63.5948 15.3245 63.5948C16.9283 63.5948 18.4664 62.9577 19.6005 61.8236C20.7345 60.6895 21.3716 59.1514 21.3716 57.5476C21.3716 55.9438 20.7345 54.4057 19.6005 53.2717C18.4664 52.1376 16.9283 51.5005 15.3245 51.5005C13.7207 51.5005 12.1826 52.1376 11.0485 53.2717C9.91445 54.4057 9.27734 55.9438 9.27734 57.5476Z" stroke="#2A2A2A" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.3711 57.5475H30.4418C32.0456 57.5475 33.5837 56.9104 34.7178 55.7763C35.8518 54.6423 36.489 53.1042 36.489 51.5004V27.3118C36.489 25.708 37.1261 24.1699 38.2601 23.0358C39.3942 21.9018 40.9323 21.2646 42.5361 21.2646H63.7011" stroke="#2A2A2A" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M54.6328 12.1938L63.7035 21.2646L54.6328 30.3353" stroke="#2A2A2A" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_844_20432">
                  <rect width="72.5657" height="72.5657" fill="white" transform="translate(0.207031 0.0996094)" />
                </clipPath>
              </defs>
            </svg>
            <p className={`${activeCard === "guide" ? "text-white" : ""} font-semibold`}>Guide</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className={`${activeCard === "Instructions" ? "bg-gradient-to-r from-buttonleft to-buttonright" : "border-2 border-black"} w-1/2 rounded-md text-center p-4`} onClick={() => handleCardClick("Instructions")}>
            <svg className="m-auto" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_844_20439)">
                <path d="M36.5117 63.5948V51.5005" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M36.5117 39.4058V27.3115" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M36.5117 15.2176V9.17041" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.4648 63.5947H42.5591" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.4141 15.2173V27.3116H57.6733L63.7205 21.2644L57.6733 15.2173H24.4141Z" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42.556 39.4062V51.5005H18.3675L12.3203 45.4534L18.3675 39.4062H42.556Z" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_844_20439">
                  <rect width="72.5657" height="72.5657" fill="white" transform="translate(0.226562 0.0996094)" />
                </clipPath>
              </defs>
            </svg>
            <p className={`${activeCard === "Instructions" ? "text-white" : ""} font-semibold`}>Instructions</p>
          </div>
          <div className={`${activeCard === "Transport" ? "bg-gradient-to-r from-buttonleft to-buttonright" : "border-2 border-black"} w-1/2 rounded-md text-center p-4`} onClick={() => handleCardClick("Transport")}>
            <svg className="m-auto" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_844_20449)">
                <path d="M12.3438 51.5003C12.3438 53.1041 12.9809 54.6422 14.1149 55.7762C15.249 56.9103 16.7871 57.5474 18.3909 57.5474C19.9947 57.5474 21.5328 56.9103 22.6669 55.7762C23.8009 54.6422 24.438 53.1041 24.438 51.5003C24.438 49.8965 23.8009 48.3584 22.6669 47.2243C21.5328 46.0902 19.9947 45.4531 18.3909 45.4531C16.7871 45.4531 15.249 46.0902 14.1149 47.2243C12.9809 48.3584 12.3438 49.8965 12.3438 51.5003Z" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M48.6289 51.5003C48.6289 53.1041 49.266 54.6422 50.4001 55.7762C51.5341 56.9103 53.0722 57.5474 54.676 57.5474C56.2799 57.5474 57.818 56.9103 58.952 55.7762C60.0861 54.6422 60.7232 53.1041 60.7232 51.5003C60.7232 49.8965 60.0861 48.3584 58.952 47.2243C57.818 46.0902 56.2799 45.4531 54.676 45.4531C53.0722 45.4531 51.5341 46.0902 50.4001 47.2243C49.266 48.3584 48.6289 49.8965 48.6289 51.5003Z" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.3479 51.5001H6.30078V18.2409C6.30078 17.439 6.61934 16.6699 7.18636 16.1029C7.75339 15.5358 8.52245 15.2173 9.32435 15.2173H51.6544C55.6639 15.2173 59.5091 17.4472 62.3443 21.4164C65.1794 25.3856 66.7722 30.769 66.7722 36.3823V51.5001H60.7251M48.6308 51.5001H24.4422" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M48.6289 15.2173L53.1643 36.3823H66.7703" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.30078 30.3354H51.6544" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.4141 15.2173V30.3351" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M36.5352 15.2173V30.3351" stroke="#121212" stroke-width="2.59163" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_844_20449">
                  <rect width="72.5657" height="72.5657" fill="white" transform="translate(0.25 0.0996094)" />
                </clipPath>
              </defs>
            </svg>
            <p className={`${activeCard === "Transport" ? "text-white" : ""} font-semibold`}>Transport</p>
          </div>
        </div>
      </div>


      {activeCard === "hajjDef" && (
        <div>
          <Hajjdef />
        </div>
      )}

      {activeCard === "guide" && (
        <div>
          <Etapehaj />
        </div>
      )}

      {activeCard === "Instructions" && (
        <div>
          <Instruction />        </div>
      )}

      {activeCard === "Transport" && (
        <div>
          Content for Transport
        </div>
      )}
    </section>
  );
}

export default Journey;
