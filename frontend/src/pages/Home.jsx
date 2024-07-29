import React from 'react'
import Contact from './Contact';
import Lottie from "lottie-react";
import gif from "../media/Animation - 1720638512048.json"
import giff from "../media/Animation - 1719504456561.json"
import { GoHeartFill } from "react-icons/go";
import News from './News';
import '../App.css';
import Fit from "./Fit"
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import logo from "../media/Virtual GymVerse.png"
import Games from './Games';
import Spinner from './Spinner';
import { SimpleGrid, Box, Heading, Text, Button, useBreakpointValue, Flex, Center } from '@chakra-ui/react';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import { useAuthStore } from '../context/store';
import { useEffect } from 'react';


export default function Home() {
  const { userState, setUser, clearUser } = useAuthStore();
  const { user, isLoaded } = useUser();
  const isMobile = useBreakpointValue({ base: true, md: false });


  if (isLoaded) {
    // setUser(user);
    if (user) {

      setUser(user, user.publicMetadata?.role)
    }

    if (!user) {
      console.log("not auth")
      localStorage.removeItem('userState');
    }
  }



  return (
    <div className="App overflow-hidden ">


      <section class=" bg-gradient-to-br from-gray-700 via-gray-900 to-gray-950">


        <div className='flex justify-between items-center'>
          <img src={logo} width="60px" className=" rounded-full ml-1 mt-1 " />
          <div className={`${!user ? 'border border-white text-gray-200 hover:bg-gray-100 transition-all duration-300 hover:text-black px-4' : ""} py-1 rounded-full mx-4`}> <SignedIn ><UserButton /></SignedIn> <SignedOut><SignInButton /></SignedOut></div>
        </div>



        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Lottie animationData={gif} loop={true} />
          </div>
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold text-left tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Elevate Your Fitness Experience with Advanced Tracking</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-left md:text-lg lg:text-xl dark:text-gray-400">"Unlock Your Potential and Achieve Optimal Fitness Levels Through Cutting-Edge Data-Driven Tracking, Providing Personalized Insights and Continuous Motivation"

              Fitness Tracker
            </p>
            <Link to="/Tracker" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Fitness Tracker
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link to="/Bmi" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              BMI Caluclator
            </Link>
          </div>

        </div>
      </section>


      {/* <header className="App-header p-4 lg:p-0">
        <div className="hero flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 hidden lg:flex ">
            <Lottie animationData={gif} loop={true} />
          </div>
          <div className="hero-text mt-6 lg:mt-0 lg:ml-8 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-[6rem] ">Elevate Your Fitness Experience with Advanced Tracking</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
              "Unlock Your Potential and Achieve Optimal Fitness Levels Through Cutting-Edge Data-Driven Tracking, Providing Personalized Insights and Continuous Motivation"
            </p>
            <div className="mt-4 mb-4 flex flex-col lg:flex-row items-center lg:items-start">
              <Link to="/Tracker">
                <button className="book-now-btn mt-2 lg:mt-0 lg:mr-2 py-2 px-4 lg:px-6 text-base lg:text-lg"><span>Fitness Tracker</span></button>
              </Link>
              <Link to="/Bmi">
                <button className="book-now-btn mt-2 lg:mt-0 lg:ml-2 py-2 px-4 lg:px-6 text-base lg:text-lg">
                  BMI Calculator
                </button>
              </Link>
            </div>
            <div className="features  flex-col items-center lg:items-start hidden lg:flex">
              <div className="feature flex flex-col items-center lg:flex-row lg:items-center mb-4">
                <span className="text-xl  lg:mb-0 lg:mr-3" role="img" aria-label="24/7 Online Support">🕒</span>
                <p className='mt-2'>Effortless Activity Monitoring</p>
              </div>

              <div className="feature flex flex-col items-center  lg:flex-row lg:items-center mb-4">
                <span className="text-xl  lg:mb-0 lg:mr-3" role="img" aria-label="96 Doctors Online">👨‍⚕️</span>
                <p className='mt-2'>Personalized Goal Setting</p>
              </div>
            </div>

          </div>
        </div>
      </header> */}

      <div className="text-center  hidden lg:block"> {/* Hide on screens smaller than lg */}
        <Spinner />
      </div>

      <div>
        <Fit />
      </div>

      <div className=' '>
        <Games />
      </div>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={8}
        p={8}
        bg="gray.50"
        borderRadius="lg"
        boxShadow="md"
      >
        <Card
          title="Games"
          text="Explore fun and interactive games to stay active and engaged."
        />
        <Card
          title="Virtual Gym"
          text="Access virtual gym sessions for personalized workouts."
        />
        <Card
          title="Fitness Tracker"
          text="Track your fitness progress and set goals with our integrated tracker."
        />
        <Card
          title="AI Bot"
          text="Interact with our AI bot for personalized health and fitness advice."
        />
      </SimpleGrid>


      <Flex
        direction={isMobile ? 'column' : 'row'}
        align="center"
        justify="center"
        gap={8}
        p={8}
        bg="gray.50"
        borderRadius="md"
        boxShadow="md"
        minH="400px"
      >
        <Box textAlign={isMobile ? 'center' : 'left'}>
          <Heading as="h2" size="xl" color="gray.800" mb={4}>
            Access AI-Driven Medical Consultations
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Get expert medical advice anytime, anywhere. Fast, reliable, and secure medical consultations at your fingertips.
          </Text>
          <Link href="/Aibot" isExternal>
            <Button
              colorScheme="blue"
              size="lg"
              variant="solid"
              borderRadius="full"
              px={6}
              py={3}
              fontWeight="bold"
              _hover={{ bg: 'blue.600' }}
            >
              Chat with the AI Bot Now
            </Button>
          </Link>
        </Box>
        <Box w="full" maxW="md" mx="auto">
          <Lottie animationData={giff} loop={true} className='w-full md:w-auto' />
        </Box>
      </Flex>

      <div>
        <News />
      </div>
      <div>
        <Contact />
      </div>
      <div className='ml-auto lg:ml-[58rem]'>
        <p className='mt-[4rem] mb-[2rem] flex items-center'>
          Made with <GoHeartFill className="mr-[0.2rem] ml-[0.2rem] text-red-700" /> by Ishita Malhotra
        </p>
      </div>


    </div>
  )
}
