import './App.css'
import Navbar from './components/Navbar'
import HeroImg from './assets/hero.png'
import Card from './components/Card'
import CardImg1 from './assets/card-1.png'
import AvatarImg1 from './assets/profile-1.png'
import GroupCard from './components/GroupCard'
import { useState } from 'react'

function App() {
  const [showFilterDropdown , setShowFilterDropdown] = useState(false);
  const optionBar = [{
    id: 1,
    title: "All Posts",
    active: true
  },
  {
    id: 2,
    title: "Article",
    active: false
  },
  {
    id: 3,
    title: "Event",
    active: false
  },
  {
    id: 4,
    title: "Education",
    active: false
  },
  {
    id: 5,
    title: "Job",
    active: false
  },
  ]

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="w-full p-0 relative">
        <div className='z-2 absolute w-full h-full' style={{ background: "#00000073" }}>
          <div className='text-white flex flex-col justify-end w-full h-full p-4 md:p-[52px]'>
            <p className='text-sm md:text-4xl font-bold'>Computer Engineering</p>
            <p className='fw-light text-xs  md:text-xl'>142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <img src={HeroImg} className='h-[200px] md:h-[400px]' alt='hero' />
      </div>

      {/* option bar */}
      <div>
        <div className="justify-between p-4 items-center hidden md:flex">
          <ul className='flex  gap-4'>
            {
              optionBar.map(obj => (
                <li className={`relative text-base ${obj.active ? 'option-grp' : ''}`} key={obj.id}>{obj.title}</li>
              ))
            }
          </ul>
          <div className='flex gap-4'>
            <select className='bg-gray-300 text-black p-2 rounded-sm cursor-pointer' defaultValue={"Write a Post"}>
              <option value="Write a Post" disabled  hidden>Write a Post</option>
            </select>
            <button className='bg-blue-500 p-2 text-white rounded-sm'>
              Join Group
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center p-2 md:hidden'>
          <p className='font-semibold'>Posts(298)</p>
          <div className='relative'>
            <div className='flex gap-2 items-center p-2 bg-gray-200 rounded-sm cursor-pointer' onClick={()=>setShowFilterDropdown(!showFilterDropdown)}>
              <p>Filter:All</p>
              <i className={`bi bi-caret-${showFilterDropdown ? 'up':'down'}-fill`}></i>
            </div>
             {showFilterDropdown && <div className='absolute  top-12 right-1 rounded-md p-2 bg-white shadow-2xl'>
                <ul className='flex flex-col gap-4 '>
                  <li className='hover:bg-gray-200 p-2 cursor-pointer'>Article</li>
                  <li className='hover:bg-gray-200 p-2 cursor-pointer'>Education</li>
                  <li className='hover:bg-gray-200 p-2 cursor-pointer'>Job</li>
                  <li className='hover:bg-gray-200 p-2 cursor-pointer'>Meetup</li>
                </ul>
              </div>}
          </div>
          
        </div>
      </div>
      <hr className='h-[2px] bg-gray-200' />
      

      <div className='flex gap-4'>
        <div className='flex-[2]'>
          <Card cardImg={CardImg1} avatarImg={AvatarImg1} avatarName={"Sarthak Kamra"} cardType={"Article"} />
          <Card cardImg={CardImg1} avatarImg={AvatarImg1} avatarName={"Sarthak Kamra"} cardType={"Article"} />
          <Card cardImg={CardImg1} avatarImg={AvatarImg1} avatarName={"Sarthak Kamra"} cardType={"Article"} />
          <Card cardImg={CardImg1} avatarImg={AvatarImg1} avatarName={"Sarthak Kamra"} cardType={"Article"} />
        </div>
        <div className='flex-[1] pt-8 hidden flex-col gap-12 md:flex'>
          <div className='flex flex-col gap-8'>
            <div className='flex items-center'>
              <i className="bi bi-geo-alt"></i>
              <input type="text" placeholder='Enter your location' className='p-2 outline-none focus:border-b-2 w-full' />
            </div>
            <div className='flex gap-2'>
              <i className="bi bi-info-circle"></i>
              <p className='text-gray-500 w-[70%]'>Your location will help us serve better and extend a personalised experience.</p>
            </div>
          </div>
          <div>
            <p className='flex gap-2'>
              <i className="bi bi-hand-thumbs-up-fill"></i>
              RECOMMENDED GROUPS
            </p>
            <div className='mt-8 flex flex-col gap-8 p-4'>
              <GroupCard groupImg={AvatarImg1} groupName={"Leisure"} />
              <GroupCard groupImg={AvatarImg1} groupName={"Leisure"} />
              <GroupCard groupImg={AvatarImg1} groupName={"Leisure"} />
              <GroupCard groupImg={AvatarImg1} groupName={"Leisure"} />
            </div>
            <p className='text-end text-blue-700 mt-4 cursor-pointer'>See more...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
