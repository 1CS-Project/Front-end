'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Journey() {
  const color = `#525252`; 
const colorn=`linear-gradient(to bottom right, ${`#B49169`} 5%, #698CB4 100%)`
  return (
    <section className='mt-[8rem] '>
      <h1 className="text-center font-semibold text-3xl mb-[4rem]">Unlock the journey to Mecca with these essential steps</h1>
    
      <div className='flex justify-center items'>
        <VerticalTimeline lineColor='#2A2A2A' >
          
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: `7px solid grey` }}
            contentStyle={{ background: `${color}`, color: '#FFF' }}
            iconStyle={{ background: `${colorn}`, color: '#000', border: `2px solid ${colorn}` }}
            icon={<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.17578 18H5.41016V6.97266C5.41016 6.60547 5.41406 6.23828 5.42188 5.87109C5.42969 5.50391 5.4375 5.14453 5.44531 4.79297C5.46094 4.44141 5.48047 4.10547 5.50391 3.78516C5.33984 3.96484 5.13672 4.16016 4.89453 4.37109C4.66016 4.58203 4.41016 4.80078 4.14453 5.02734L2.17578 6.59766L0.792969 4.85156L5.87891 0.867188H8.17578V18Z" fill="#F5F5F5"/>
            </svg>
            }
          
          >
            <h3 className="vertical-timeline-element-title font-bold underline pb-2">Registration</h3>
            <span className='font-medium'>This step ensures that all necessary information is accurately collected and securely stored, facilitating the smooth coordination of pilgrimage logistics...</span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: `7px solid grey` }}
            contentStyle={{ background: `${color}`, color: '#FFF' }}
            iconStyle={{ background: `${colorn}`, color: '#000', border: `2px solid ${colorn}` }}
            icon={<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6797 18H0.078125V15.9258L4.51953 11.4258C5.37891 10.5508 6.08594 9.79688 6.64062 9.16406C7.19531 8.52344 7.60547 7.91797 7.87109 7.34766C8.14453 6.77734 8.28125 6.15625 8.28125 5.48438C8.28125 4.65625 8.04297 4.03125 7.56641 3.60938C7.08984 3.17969 6.46094 2.96484 5.67969 2.96484C4.9375 2.96484 4.25 3.11328 3.61719 3.41016C2.99219 3.69922 2.34375 4.11328 1.67188 4.65234L0.160156 2.83594C0.636719 2.42969 1.14453 2.05859 1.68359 1.72266C2.23047 1.38672 2.83984 1.12109 3.51172 0.925781C4.18359 0.722656 4.94922 0.621094 5.80859 0.621094C6.89453 0.621094 7.83203 0.816406 8.62109 1.20703C9.41016 1.58984 10.0156 2.125 10.4375 2.8125C10.8672 3.5 11.082 4.30078 11.082 5.21484C11.082 6.13672 10.8984 6.98828 10.5312 7.76953C10.1641 8.55078 9.64062 9.32422 8.96094 10.0898C8.28125 10.8477 7.47266 11.6719 6.53516 12.5625L3.57031 15.457V15.5859H11.6797V18Z" fill="#F5F5F5"/>
            </svg>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold underline pb-2">Examination</h3>
            <span className='font-medium'>In this step, pilgrims are guided through the process of scheduling and attending medical examinations to assess their physical fitness and readiness for ...</span>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: `7px solid grey` }}
            contentStyle={{ background: `${color}`, color: '#FFF' }}
            iconStyle={{ background: `${colorn}`, color: '#000', border: `2px solid ${colorn}` }}
            icon={<svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0234 4.78125C11.0234 5.55469 10.8672 6.22656 10.5547 6.79688C10.2422 7.36719 9.8125 7.83594 9.26562 8.20312C8.72656 8.5625 8.10156 8.82031 7.39062 8.97656V9.05859C8.75781 9.23047 9.78906 9.66016 10.4844 10.3477C11.1875 11.0352 11.5391 11.9453 11.5391 13.0781C11.5391 14.0703 11.3008 14.957 10.8242 15.7383C10.3477 16.5117 9.61719 17.1211 8.63281 17.5664C7.64844 18.0117 6.38281 18.2344 4.83594 18.2344C3.90625 18.2344 3.04297 18.1602 2.24609 18.0117C1.45703 17.8633 0.707031 17.625 -0.00390625 17.2969V14.8477C0.722656 15.207 1.49609 15.4844 2.31641 15.6797C3.13672 15.875 3.91406 15.9727 4.64844 15.9727C6.07812 15.9727 7.09766 15.707 7.70703 15.1758C8.31641 14.6367 8.62109 13.8945 8.62109 12.9492C8.62109 12.3398 8.46094 11.8398 8.14062 11.4492C7.82812 11.0586 7.33984 10.7656 6.67578 10.5703C6.01953 10.375 5.17188 10.2773 4.13281 10.2773H2.62109V8.0625H4.14453C5.13672 8.0625 5.93359 7.94531 6.53516 7.71094C7.13672 7.46875 7.57031 7.13672 7.83594 6.71484C8.10938 6.29297 8.24609 5.80078 8.24609 5.23828C8.24609 4.50391 8.00781 3.93359 7.53125 3.52734C7.05469 3.11328 6.34766 2.90625 5.41016 2.90625C4.83203 2.90625 4.30469 2.97266 3.82812 3.10547C3.35938 3.23828 2.92578 3.40625 2.52734 3.60938C2.12891 3.8125 1.75 4.03125 1.39062 4.26562L0.0664062 2.35547C0.714844 1.87109 1.48828 1.46094 2.38672 1.125C3.28516 0.789062 4.33203 0.621094 5.52734 0.621094C7.28516 0.621094 8.64062 1 9.59375 1.75781C10.5469 2.50781 11.0234 3.51562 11.0234 4.78125Z" fill="#F5F5F5"/>
            </svg>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold underline pb-2">Accommodation</h3>
            <span className='font-medium'>In this step, pilgrims are presented with a comprehensive list of available hotels, ranging from budget-friendly options to luxury accommodations, conveniently ...</span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: `7px solid grey` }}
            contentStyle={{ background: `${color}`, color: '#FFF' }}
            iconStyle={{ background: `${colorn}`, color: '#fff', border: `2px solid ${colorn}` }}
            icon={<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3008 14.2383H10.9805V18H8.26172V14.2383H0.46875V12.1523L8.29688 0.820312H10.9805V11.9531H13.3008V14.2383ZM8.26172 11.9531V7.69922C8.26172 7.34766 8.26562 6.99219 8.27344 6.63281C8.28906 6.26562 8.30469 5.91406 8.32031 5.57812C8.33594 5.24219 8.35156 4.93359 8.36719 4.65234C8.38281 4.36328 8.39453 4.125 8.40234 3.9375H8.30859C8.16016 4.25 7.99609 4.57031 7.81641 4.89844C7.63672 5.21875 7.44531 5.53125 7.24219 5.83594L3.02344 11.9531H8.26172Z" fill="#F5F5F5"/>
            </svg>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold underline pb-2">Payment</h3>
            <span className='font-medium'>In this step, pilgrims are provided with a secure and user-friendly platform to settle their bills and fees associated with the pilgrimage, including registration fees ...</span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: `7px solid grey` }}
            contentStyle={{ background: `${color}`, color: '#FFF' }}
            iconStyle={{ background: `${colorn}`, color: '#fff', border: `2px solid ${colorn}` }}
            icon={<svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.90234 7.28906C7.00391 7.28906 7.97266 7.48828 8.80859 7.88672C9.65234 8.27734 10.3086 8.85547 10.7773 9.62109C11.2461 10.3789 11.4805 11.3086 11.4805 12.4102C11.4805 13.6133 11.2266 14.6523 10.7188 15.5273C10.2109 16.3945 9.46484 17.0625 8.48047 17.5312C7.49609 18 6.29688 18.2344 4.88281 18.2344C3.98438 18.2344 3.14453 18.1562 2.36328 18C1.58984 17.8438 0.921875 17.6094 0.359375 17.2969V14.8125C0.945312 15.1406 1.64844 15.4102 2.46875 15.6211C3.28906 15.8242 4.07422 15.9258 4.82422 15.9258C5.62109 15.9258 6.30469 15.8086 6.875 15.5742C7.44531 15.3398 7.88281 14.9805 8.1875 14.4961C8.5 14.0117 8.65625 13.3984 8.65625 12.6562C8.65625 11.6719 8.33984 10.9141 7.70703 10.3828C7.08203 9.84375 6.10156 9.57422 4.76562 9.57422C4.29688 9.57422 3.79688 9.61719 3.26562 9.70312C2.74219 9.78125 2.30469 9.86719 1.95312 9.96094L0.746094 9.24609L1.39062 0.867188H10.2969V3.29297H3.81641L3.44141 7.55859C3.72266 7.49609 4.05859 7.4375 4.44922 7.38281C4.83984 7.32031 5.32422 7.28906 5.90234 7.28906Z" fill="#F5F5F5"/>
            </svg>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold underline pb-2">Step by step</h3>
            <span className='font-medium'>In this step, pilgrims gain access to a curated series of resources, tools, and information to navigate each stage of the Hajj pilgrimage with confidence and ease. From the ...</span>
          </VerticalTimelineElement>
        

        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Journey;
