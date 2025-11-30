require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Project = require('./models/Project');

const sampleProjects = [
  {
    title: 'Personal MERN Portfolio',
    description: 'My portfolio showcasing projects built with the MERN stack.',
    tech: ['React', 'Node', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/yourusername/portfolio',
    demoUrl: '',
    imageUrl: ''
  },
  {
    title: 'Recipe App',
    description: 'A fullstack recipe app with CRUD and search.',
    tech: ['React', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/yourusername/recipe-app',
    demoUrl: '',
    imageUrl: ''
  }
];

const seed = async () => {
  try {
    await connectDB();
    console.log('Connected. Seeding projects...');
    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    console.log('Seeding complete.');
    mongoose.disconnect();
  } catch (err) {
    console.error('Seed error:', err);
    mongoose.disconnect();
  }
};

seed();
