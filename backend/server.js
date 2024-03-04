import express from 'express';

import userRoutes from "./routes/users.js";
app.use(cors());
app.use('/posts', postRoutes);
app.use('/users', userRoutes);


// const PORT = process.env.PORT;

