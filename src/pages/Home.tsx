import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimony from '../components/Testimony';
import Section from '../components/Section';
import Tag from '../components/Tag';
import Tip from '../components/Tip';

// types
import { TagProps } from '../components/Tag';

//assets
import BgHero from '../assets/bg-hero.svg';
import Hero from '../assets/hero.svg';
import LongQueue from '../assets/long-queue.png';
import Transactions from '../assets/transactions.png';
import Border from '../assets/border.svg';
import AccountBorder from '../assets/AccountBorder.svg';
import AccounMgt from '../assets/account-management.png';

const Home: React.FC = () => {
  const countRef = React.useRef(null);

  const TagContents: TagProps[] = [
    {
      tagText: 'SIWES Payment',
      className: ' border-[#8AF3D1] bg-[#E6FCF5] text-[#006042]',
    },
    {
      tagText: 'Departmental Bills',
      className: 'border-[#FAD88A] bg-[#FEF7E6] text-[#664700]',
    },
    {
      tagText: 'TEC',
      className: 'border-[#8D8BD6] bg-[#F4F3FB] text-[#3B3A5A]',
    },
    {
      tagText: 'Clinic Registration',
      className: 'border-[#FAD88A] bg-[#FEF7E6] text-[#664700]',
    },
    {
      tagText: 'Matric Gown',
      className: 'border-[#8D8BD6] bg-[#F4F3FB] text-[#3B3A5A]',
    },
    {
      tagText: 'Others',
      className: 'border-[#8AF3D1] bg-[#E6FCF5] text-[#006042]',
    },
  ];

  return (
    <div className="w-full relative">
      <div className="relative bg-[#14142D] text-white overflow-hidden">
        <Header />
        <img
          src={BgHero}
          alt="hero-background"
          className="w-full h-full absolute object-cover mix-blend-overlay"
        />
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="w-full py-[2rem] md:py-auto md:w-1/2 relative">
            <div className="w-[90%] lg:w-[80%] mx-auto">
              <h4 className="text-[#807EC3] font-[500] text-[20px] tracking-[2%] leading-[40px] mb-4">
                Welcome! Future platform
              </h4>
              <h1 className="text-white text-[25px] lg:text-[40px] font-[700] tracking-[2%] mb-4 leading-[35px] lg:leading-[50px]">
                Simplify Your Payments: Easing Student Stress with our Seamless
                E-Wallet Platform!
              </h1>
              <p className="text-[16px] font-[400px] tracking-[2%] leading-[24px] mb-4">
                Say goodbye to long queues! Simplify your payments with our
                student-centered E-Wallet Platform. Convenient, cashless, and
                stress-free. Join now!"
              </p>
              <button className="bg-[#F4AA00] relative py-2 px-6 rounded-md text-[#08111B] my-8">
                <span className="font-[600] text-[20px]">Get Started</span>
                <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
              </button>

              <div className="mt-6 flex w-full relative" ref={countRef}>
                <Testimony
                  base={100}
                  subtext="Active Users"
                  componentRef={countRef}
                  isMoney
                  className="mr-4"
                />
                <Testimony
                  base={5.0}
                  subtext="Reviews"
                  componentRef={countRef}
                  className="mx-4"
                />
                <Testimony
                  base={10}
                  subtext="Transactions"
                  componentRef={countRef}
                  isMoney
                  isUnit
                  className="ml-4"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img src={Hero} alt="hero_image" className="w-full h-full" />
          </div>
        </div>
      </div>

      <Section
        imageURL={LongQueue}
        className="md:flex-row text-[#122940] justify-center  items-center "
      >
        <h1 className="font-[700] text-[25px] md:text-[36px] tracking-[2%] leading-[35px] md:leading-[48px] ">
          {' '}
          Are you tired of long queues and time-consuming payment processes at
          <span className="text-[#01CF8E]"> Unilorin Microfinance Bank?</span>
        </h1>
        <p className="font-[400] text-[16px] tracking-[2%] leading-[24px] mt-8 mb-4 text-left">
          With <b>Elud</b> , a web app that conveniently manage your payments
          anytime, anywhere. Load funds, settle bills, and more, all with just a
          few taps on your phone.
        </p>
        <div className="flex flex-wrap mt-10 flex-auto">
          {TagContents.map((tagContent: TagProps, _idx: number) => (
            <Tag
              tagText={tagContent.tagText}
              key={_idx}
              className={tagContent.className}
            />
          ))}
        </div>
      </Section>

      <Section
        imageURL={Transactions}
        className="md:flex-row-reverse text-[#122940] justify-center items-start"
      >
        <h5 className="text-[#1A1035] text-[20px] tracking-[2%] leading-[40px] border-[20] border-[url('assets/border.svg)]">
          <span>Transactions </span>
          <img src={Border} alt="border-image" />
        </h5>
        <h1 className="font-[700] text-[25px] mt-10 md:text-[36px] tracking-[2%] leading-[35px] md:leading-[48px] ">
          Receipt Generation after every transaction
        </h1>
        <p className="font-[400] text-[16px] tracking-[2%] leading-[24px] mt-8 mb-4 text-left text-[#1D4267]">
          Digital receipts serve as instant confirmations and proof of payment,
          providing students with a convenient and organized way to keep track
          of their financial transactions. The receipts can be easily accessed
          and reviewed within the app, allowing students to stay informed about
          their payment history and reconcile expenses.
        </p>
        <button className="bg-[#F4AA00] relative py-2 px-6 rounded-md text-[#08111B] my-8">
          <span className="font-[600] text-[20px]">Get Started</span>
          <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
        </button>
      </Section>

      <Section
        imageURL={AccounMgt}
        className="md:flex-row text-[#122940] justify-center items-start"
      >
        <h5 className="text-[#1A1035] text-[20px] tracking-[2%] leading-[40px] border-[20] border-[url('assets/border.svg)]">
          <span>Account Management </span>
          <img src={AccountBorder} alt="border-image" />
        </h5>
        <h1 className="font-[700] text-[25px] mt-10 md:text-[36px] tracking-[2%] leading-[35px] md:leading-[48px] ">
          Manage your e-wallet account details, including balance and
          transaction history.
        </h1>
        <p className="font-[400] text-[16px] tracking-[2%] leading-[24px] mt-8 mb-4 text-left text-[#1D4267]">
          With our E-Wallet Web App, you have full control over your account
          details, empowering you to manage your finances effortlessly. The app
          allows you to access and monitor essential information, including your
          e-wallet balance and transaction history.
        </p>
        <button className="bg-[#F4AA00] relative py-2 px-6 rounded-md text-[#08111B] my-8">
          <span className="font-[600] text-[20px]">Get Started</span>
          <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
        </button>
      </Section>

      <div className="w-[90%] mx-auto max-w-[1200px] relative py-6 bg-pre-footer-bg bg-no-repeat bg-bottom h-[627px] my-6 border-[1px] border-solid border-gray-300 rounded-xl flex flex-col justify-center items-center px-2 ">
        <h1 className="font-[600] text-[20px]  md:text-[24px] text-[#3B3A5A] mb-8 capitalize">
          How to get Started on Elud
        </h1>
        <div className="flex gap-6 flex-wrap justify-center">
          <div>
            <Tip
              numberBg="bg-[#B0F7E0]"
              headerBg="bg-[#E6FCF5]"
              index={1}
              header="Click on Registration Button"
              text="Sign Up with your Student E-mail address"
            />
          </div>
          <div>
            <Tip
              numberBg="bg-[#FCE5B0]"
              headerBg="bg-[#FEF7E6]"
              index={2}
              header="Verify your Student Email"
              text="Click on the link sent to your student E-mail"
            />
          </div>
          <div>
            <Tip
              numberBg="bg-[#DCDBF2]"
              headerBg="bg-[#F4F3FB]"
              index={3}
              header="Hurray You’re in"
              text="Complete your profile by setting transaction Pin"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
