import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import SimilarExercises from "../components/SimilarExercises";
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import { Link } from 'react-router-dom';

export default function ExerciseDetail () {
  const [exerciseDetail, setExerciseDetail] = useState({});
const[targetMuscleExercises,setTargetMuscleExercises]=useState([]);
const[equipmentExercises,setEquipmentExercises]=useState([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

       const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box  sx={{ mt: { lg: '70px', xs: '60px' } }}>

<Link to="/Fitness">
<button className="bg-blue-200 text-red-500 font-bold py-2 px-4 rounded ml-[75rem] mt-[-1rem] mb-[2rem] lg:flex hidden ">BACK</button>
</Link>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};


